# Northstar Retail Co. — Go-Live Readiness

## What Works

The MVP supports two ticket-deflection categories end to end: order status and returns/refunds.

- `GET /orders/{id}/status` returns real order status and product name from PostgreSQL.
- `POST /returns` creates a return record after checking that the order exists.
- `GET /returns/{id}/status` returns the current status of a return.
- `POST /support/classify` classifies incoming text as `order_status` or `return_query` using keyword matching and returns a confidence score.
- The frontend forms for order status, return initiation, and return status have been tested end to end against the live backend.
- Invalid IDs receive `404` responses, and the frontend provides clear messaging when the server cannot be reached.

## Known Limitations

- Stock/product availability, the third original ticket category, was not built. Scope was intentionally narrowed to order status and returns on Day 1.
- The API has no authentication or rate limiting. This is acceptable for the demo only and must be addressed before real production use.
- CORS currently allows all origins. This is appropriate for local development only and must be restricted before deployment.
- There is no automated test suite; all testing has been manual with curl and browser-based checks.

## What Northstar's Team Needs to Operate This

1. Install and run PostgreSQL 16. Run the database migration files in `backend/app/database/migrations/` in numeric order. The current repository includes migrations `001` through `004`.
2. Install Python 3.12 and the packages in `backend/requirements.txt`.
3. Set database host, port, name, user, and password in the environment, using `backend/.env.example` as the reference.
4. From the `backend` directory, start the API:

   ```bash
   uvicorn app.main:app --reload
   ```

5. Open `frontend/index.html` in a browser, or serve the frontend through a static-file host.
6. Refer to `docs/API.md` for endpoint documentation and `docs/QA_LOG.md` for known issues and resolutions.

Before any deployment beyond the demo, add authentication, authorization, rate limiting, restricted CORS, and automated API/frontend tests.
