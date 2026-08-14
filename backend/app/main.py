from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import orders, returns, support
from app.database.connection import init_db_pool, close_db_pool

app = FastAPI(title="Northstar Support Deflection MVP")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(orders.router, prefix="/orders", tags=["orders"])
app.include_router(returns.router, prefix="/returns", tags=["returns"])
app.include_router(support.router, prefix="/support", tags=["support"])


@app.on_event("startup")
async def startup():
    await init_db_pool()


@app.on_event("shutdown")
async def shutdown():
    await close_db_pool()
