# Northstar Support Deflection MVP API

Base URL: `http://localhost:8000`

## 1. Get order status

**Method:** `GET`  
**Path:** `/orders/{id}/status`

Retrieves the status and product name for an order.

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

### Error responses

Order not found (`404`):

```http
GET /orders/99999/status
```

```json
{
  "detail": "Order not found"
}
```

An ID that is not an integer is rejected with `422 Unprocessable Entity`.

## 2. Create a return

**Method:** `POST`  
**Path:** `/returns`

Creates a pending return request for an existing order.

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

### Error responses

Order not found (`404`):

```json
{
  "detail": "Order not found"
}
```

The request body must include an integer `order_id` and string `reason`; missing or invalid fields return `422 Unprocessable Entity`.

## 3. Get return status

**Method:** `GET`  
**Path:** `/returns/{id}/status`

Retrieves the status of a return request.

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

### Error responses

Return not found (`404`):

```http
GET /returns/99999/status
```

```json
{
  "detail": "Return not found"
}
```

An ID that is not an integer is rejected with `422 Unprocessable Entity`.

## 4. Classify a support request

**Method:** `POST`  
**Path:** `/support/classify`

Classifies free-text support requests as either `order_status` or `return_query`.

### Request body

```json
{
  "text": "where is my order"
}
```

### Success responses

Order-status query:

```json
{
  "category": "order_status",
  "confidence": 0.9
}
```

Return query:

```json
{
  "category": "return_query",
  "confidence": 0.9
}
```

For example, submit the following request body for the return-query response:

```json
{
  "text": "I want to return this item"
}
```

### Error responses

`text` is required and must contain 1 to 500 characters. A missing, empty, or overlong value returns `422 Unprocessable Entity`.
