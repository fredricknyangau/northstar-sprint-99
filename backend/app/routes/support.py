from fastapi import APIRouter

from app.schemas.support import ClassifyRequest, ClassifyResponse
from app.services.support import classify_text

router = APIRouter()


@router.post("/classify", response_model=ClassifyResponse)
async def classify_support_query(payload: ClassifyRequest) -> ClassifyResponse:
    return ClassifyResponse(**classify_text(payload.text))
