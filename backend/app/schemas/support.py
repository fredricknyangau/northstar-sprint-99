from pydantic import BaseModel


class ReturnCreateRequest(BaseModel):
    order_id: int
    reason: str


class ReturnResponse(BaseModel):
    id: int
    order_id: int
    reason: str
    status: str
