from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import orders, returns, support

app = FastAPI(title="Northstart Support Deflection MVP")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allowed_methods=["*"],
    allow_headers=["*"],
)
app.include_router(orders.router, prefix="/orders", tags=["orders"])
app.include_router(returns.router, prefix="/returns", tags=["returns"])
app.include_router(support.router, prefix="/support", tags=["support"])
