from typing import Literal

from pydantic import BaseModel, Field

class ReturnCreateRequest(BaseModel):
    order_id: int
    reason: str


class ReturnResponse(BaseModel):
    id: int
    order_id: int
    reason: str
    status: str


class ClassifyRequest(BaseModel):
    text: str = Field(min_length=1, max_length=500)


class ClassifyResponse(BaseModel):
    category: Literal["order_status", "return_query"]
    confidence: float = Field(ge=0.0, le=1.0)
