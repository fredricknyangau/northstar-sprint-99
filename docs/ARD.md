# Architecture & Requirements Document (ARD)
## Northstar Support Deflection MVP

**Sprint deadline:** Saturday
**Status:** Living document — update as scope shifts

---

## 1. What We're Building

A backend-driven Support Deflection MVP covering two ticket categories:

1. **Order status** — customer checks where their order is
2. **Returns & refunds** — customer initiates and checks a return

Approach: rule-based backend logic (no chatbot, no ML) + a plain HTML/CSS/JS frontend calling our FastAPI backend directly.

---

## 2. System Architecture

```
Browser (Maria's frontend)
      |
      | fetch() calls
      v
FastAPI Backend (Fredrick + Stephen)
      |
      | raw SQL queries (asyncpg)
      v
PostgreSQL (Mark's schema/migrations)
```

No ORM. Raw SQL only. Routes stay thin, business logic lives in `services/`.

---

## 3. Database — Owner: Mark

**Location:** `backend/app/database/migrations/`

### Tables

**`orders`**

| Column | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | |
| customer_name | TEXT NOT NULL | |
| product_name | TEXT NOT NULL | |
| status | TEXT NOT NULL | one of: pending, shipped, delivered, returned |
| created_at | TIMESTAMP DEFAULT NOW() | |

**`order_items`**

| Column | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | |
| order_id | INT REFERENCES orders(id) | |
| item_name | TEXT NOT NULL | |
| quantity | INT NOT NULL | |

**`returns`**

| Column | Type | Notes |
|---|---|---|
| id | SERIAL PRIMARY KEY | |
| order_id | INT REFERENCES orders(id) | |
| reason | TEXT NOT NULL | |
| status | TEXT NOT NULL | one of: pending, approved, refunded |
| created_at | TIMESTAMP DEFAULT NOW() | |

### Deliverables

- `001_create_orders.sql`, `002_create_order_items.sql`, `003_create_returns.sql` — numbered, run in order
- 15–20 seed rows in `orders` covering all status values
- Schema notes in `docs/schema.md`

### Definition of Done

Migrations run clean on a fresh Postgres instance. Seed data exists and is queryable.

---

## 4. Backend — Owners: Fredrick, Stephen

**Location:** `backend/app/routes/`, `backend/app/services/`, `backend/app/schemas/`

### Endpoints

| Method | Path | Owner | Purpose |
|---|---|---|---|
| GET | `/orders/{id}/status` | Stephen | Return order status for a given ID |
| POST | `/returns` | Fredrick | Create a return record |
| GET | `/returns/{id}/status` | Fredrick | Return current status of a return |
| POST | `/support/classify` | Stephen | Given free text, classify as order-status or return query |

### Request/Response Examples

**GET /orders/{id}/status**
```json
// Response
{ "id": 12, "status": "shipped", "product_name": "Blue Sneakers" }
```

**POST /returns**
```json
// Request
{ "order_id": 12, "reason": "wrong size" }
// Response
{ "id": 4, "order_id": 12, "reason": "wrong size", "status": "pending" }
```

### Rules

- Routes only receive requests and call a service function — no DB logic in routes.
- Services hold all business logic and DB calls.
- Return `404` for any ID that doesn't exist, never a silent empty response.

### Definition of Done

All 4 endpoints return correct responses for valid input, proper error codes for invalid input, tested via curl or Postman.

---

## 5. Frontend — Owner: Maria

**Location:** `frontend/`

### Pages/Views (single `index.html` is fine, sectioned)

1. **Order status form** — input order ID, calls `GET /orders/{id}/status`, displays result
2. **Return form** — input order ID + reason, calls `POST /returns`, shows confirmation
3. **Return status check** — input return ID, calls `GET /returns/{id}/status`, displays result

### Notes

- Use `fetch()` directly against the backend, no framework needed.
- Backend runs locally at `http://localhost:8000` — hardcode this for now, can move to config later.
- CORS is already enabled on the backend, so calls from `index.html` will work whether opened as a local file or served.
- Can build against placeholder/mock JSON responses now, swap to live calls once endpoints are ready.

### Definition of Done

All 3 flows work end-to-end against the live backend, with basic error states shown (e.g. "order not found").

---

## 6. QA & Documentation — Owner: Ibrahim

**Location:** `docs/`

- `docs/API.md` — full endpoint documentation (method, path, params, sample request/response, matches Section 4 above)
- `docs/QA_LOG.md` — bug list with reproduction steps, covering both API and frontend edge cases (invalid IDs, missing fields, empty states)
- `docs/GO_LIVE.md` — 1-page note: what works, what's known-broken, what Northstar's team needs to run this without us

### Definition of Done

All three docs exist, are accurate against the actual final build, and are readable by someone who wasn't on this team.

---

## 7. Integration Order (critical path)

1. Mark's migrations merge → unblocks real DB queries
2. Fredrick/Stephen swap placeholder logic for real queries → endpoints go live
3. Maria connects frontend to live endpoints → full flow demoable
4. Ibrahim runs QA pass once flow is live → bugs logged and fixed
5. Final demo packaged (Fredrick)

---

## 8. Deadline Checklist (Saturday)

- [ ] Migrations merged and seeded
- [ ] All 4 endpoints live and tested
- [ ] Frontend connected end-to-end
- [ ] QA pass complete, critical bugs fixed
- [ ] API.md, QA_LOG.md, GO_LIVE.md complete
- [ ] Final demo run-through successful
