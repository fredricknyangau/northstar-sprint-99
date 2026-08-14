from typing import Any

from app.database.connection import get_pool


async def get_order_status(order_id: int) -> dict[str, Any] | None:
    """Fetch the fields exposed by the order-status endpoint."""
    pool = get_pool()

    async with pool.acquire() as connection:
        row = await connection.fetchrow(
            """
            SELECT id, status, product_name
            FROM orders
            WHERE id = $1
            """,
            order_id,
        )

    return dict(row) if row else None
