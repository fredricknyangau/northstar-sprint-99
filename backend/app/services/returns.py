from app.database.connection import get_pool


async def create_return(order_id: int, reason: str) -> dict | None:
    pool = get_pool()
    async with pool.acquire() as conn:
        # confirm the order actually exists before creating a return against it
        order = await conn.fetchrow("SELECT id FROM orders WHERE id = $1", order_id)
        if order is None:
            return None

        row = await conn.fetchrow(
            """
            INSERT INTO returns (order_id, reason, status)
            VALUES ($1, $2, 'pending')
            RETURNING id, order_id, reason, status
            """,
            order_id,
            reason,
        )
        return dict(row)


async def get_return_status(return_id: int) -> dict | None:
    pool = get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT id, order_id, reason, status FROM returns WHERE id = $1",
            return_id,
        )
        return dict(row) if row else None
