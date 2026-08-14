RETURN_KEYWORDS = ("return", "refund", "exchange", "damaged", "wrong size")
ORDER_STATUS_KEYWORDS = ("order", "track", "tracking", "where is", "delivery", "shipped", "delivered", "status")


def classify_text(text: str) -> dict[str, str | float]:
    """Classify a support query with predictable MVP keyword rules."""
    normalized_text = text.lower()

    if any(keyword in normalized_text for keyword in RETURN_KEYWORDS):
        return {"category": "return_query", "confidence": 0.9}

    if any(keyword in normalized_text for keyword in ORDER_STATUS_KEYWORDS):
        return {"category": "order_status", "confidence": 0.9}

    return {"category": "order_status", "confidence": 0.5}
