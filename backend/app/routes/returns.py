from fastapi import APIRouter, HTTPException
from app.schemas.support import ReturnCreateRequest, ReturnResponse
from app.services import returns as returns_service

router = APIRouter()

@router.post("", response_model=ReturnResponse)
async def initiate_return(payload: ReturnCreateRequest):
    result = await returns_service.create_return(payload.order_id, payload.reason)
    if result is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return result

@router.get("/{return_id}/status", response_model=ReturnResponse)
async def get_return_status(return_id: int):
    result = await returns_service.get_return_status(return_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Return not found")
    return result
