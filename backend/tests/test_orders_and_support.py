from fastapi.testclient import TestClient
import pytest

from app import main as main_module
from app.services import orders as orders_service

app = main_module.app


class FakeConnection:
    def __init__(self, row):
        self.row = row

    async def fetchrow(self, query, order_id):
        return self.row if order_id == 2 else None


class FakeAcquire:
    def __init__(self, row):
        self.connection = FakeConnection(row)

    async def __aenter__(self):
        return self.connection

    async def __aexit__(self, exc_type, exc_value, traceback):
        return None


class FakePool:
    def acquire(self):
        return FakeAcquire({"id": 2, "status": "shipped", "product_name": "Samsung Galaxy A15"})


@pytest.fixture(autouse=True)
def fake_database(monkeypatch):
    async def init_pool():
        return None

    async def close_pool():
        return None

    monkeypatch.setattr(main_module, "init_db_pool", init_pool)
    monkeypatch.setattr(main_module, "close_db_pool", close_pool)
    monkeypatch.setattr(orders_service, "get_pool", lambda: FakePool())


def test_order_status_returns_database_order():
    with TestClient(app) as client:
        response = client.get("/orders/2/status")

    assert response.status_code == 200
    assert response.json() == {
        "id": 2,
        "status": "shipped",
        "product_name": "Samsung Galaxy A15",
    }


def test_order_status_returns_404_for_unknown_order():
    with TestClient(app) as client:
        response = client.get("/orders/999/status")

    assert response.status_code == 404
    assert response.json()["detail"] == "Order not found"


def test_classify_return_query():
    with TestClient(app) as client:
        response = client.post("/support/classify", json={"text": "I need a refund for a damaged item"})

    assert response.status_code == 200
    assert response.json() == {"category": "return_query", "confidence": 0.9}


def test_classify_order_status_query():
    with TestClient(app) as client:
        response = client.post("/support/classify", json={"text": "Where is my order?"})

    assert response.status_code == 200
    assert response.json() == {"category": "order_status", "confidence": 0.9}


def test_classify_unknown_text_uses_order_status_fallback():
    with TestClient(app) as client:
        response = client.post("/support/classify", json={"text": "Please help me"})

    assert response.status_code == 200
    assert response.json() == {"category": "order_status", "confidence": 0.5}
