# Northstar Support Deflection MVP API

Base URL: `http://localhost:8000`

## 1. Get order status

**Method:** `GET`  
**Path:** `/orders/{id}/status`

### Success response

```http
GET /orders/1/status
```

```json
{
  "id": 1,
  "status": "pending",
  "product_name": "Nike Air Max 270"
}
```

### Error response

`404 Not Found` when the order does not exist:

```http
GET /orders/99999/status
```

```json
{
  "detail": "Order not found"
}
```

## 2. Create a return

**Method:** `POST`  
**Path:** `/returns`

### Request body

```json
{
  "order_id": 1,
  "reason": "wrong size"
}
```

### Success response

```json
{
  "id": 10,
  "order_id": 1,
  "reason": "wrong size",
  "status": "pending"
}
```

### Error response

`404 Not Found` when the order does not exist. For example:

```json
{
  "order_id": 99999,
  "reason": "test"
}
```

```json
{
  "detail": "Order not found"
}
```

## 3. Get return status

**Method:** `GET`  
**Path:** `/returns/{id}/status`

### Success response

```http
GET /returns/10/status
```

```json
{
  "id": 10,
  "order_id": 1,
  "reason": "wrong size",
  "status": "pending"
}
```

### Error response

`404 Not Found` when the return does not exist:

```http
GET /returns/99999/status
```

```json
{
  "detail": "Return not found"
}
```

## 4. Classify a support message

**Method:** `POST`  
**Path:** `/support/classify`

### Order-status request and response

```json
{
  "text": "where is my order"
}
```

```json
{
  "category": "order_status",
  "confidence": 0.9
}
```

### Return-query request and response

```json
{
  "text": "I want to return this item"
}
```

```json
{
  "category": "return_query",
  "confidence": 0.9
}
```

### Error response

`422 Unprocessable Entity` is returned when the required `text` field is missing, empty, or invalid.
