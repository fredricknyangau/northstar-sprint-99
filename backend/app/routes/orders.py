from typing import Any

from fastapi import APIRouter, HTTPException

from app.services.orders import get_order_status

router = APIRouter()


@router.get("/{order_id}/status")
async def order_status(order_id: int) -> dict[str, Any]:
    order = await get_order_status(order_id)

    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")

    return order
