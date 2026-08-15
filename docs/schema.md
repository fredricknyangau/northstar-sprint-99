@'
# Database Schema — Northstar Support Deflection MVP

PostgreSQL

## 1. Orders

Stores customer order information required for order-status checks.

| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| order_number | TEXT | UNIQUE, NOT NULL |
| customer_name | TEXT | NOT NULL, DEFAULT 'Unknown Customer' |
| product_name | TEXT | NOT NULL, DEFAULT 'Unknown Product' |
| status | TEXT | NOT NULL |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() |

Allowed order statuses: `pending`, `shipped`, `delivered`, `returned`

> `customer_name` and `product_name` added via `004_fix_orders_columns.sql`, per ARD Section 3.

---

## 2. Order Items

Stores the individual products/items belonging to an order.

| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| order_id | INTEGER | NOT NULL, FOREIGN KEY → orders.id |
| item_name | TEXT | NOT NULL |
| quantity | INTEGER | NOT NULL |

---

## 3. Returns

Stores return requests associated with orders.

| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| order_id | INTEGER | NOT NULL, FOREIGN KEY → orders.id |
| reason | TEXT | NOT NULL |
| status | TEXT | NOT NULL |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() |

Allowed return statuses: `pending`, `approved`, `refunded`
'@ | Set-Content -Path docs/schema.md