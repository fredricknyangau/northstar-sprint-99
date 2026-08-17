# QA Log

## Bug: Frontend not connected to live backend

**Found by:** Fredrick, during final demo packaging (Task 14)
**Severity:** High - blocked all functionality

**What was wrong:**

1. `script.js` contained hardcoded sample data in every handler (order status, return creation, return status, classifier), never actually calling the backend.
2. `API_BASE_URL` was set to `https://localhost:8000` instead of `http://localhost:8000`. Since the local backend has no TLS certificate, every fetch call would have failed silently or thrown a connection error.

**How it was found:**
Manual end-to-end walkthrough while packaging the final demo, checking `script.js` directly before testing in browser rather than assuming it was wired up.

**Fix:**
Replaced all hardcoded response logic with real `fetch()` calls to `/orders/{id}/status`, `/returns`, `/returns/{id}/status`, and `/support/classify`. Corrected the protocol from `https` to `http`. Added explicit handling for 404 responses, other non-200 responses, and network failures so the UI shows a clear message instead of breaking silently.

**Verified:**
All four flows tested against the live backend and real seeded data, confirmed via server logs showing correct 200 and 404 responses for both valid and invalid input.

**Status:** Resolved, merged in PR (final-demo-package branch)

## API behavior entries

### Test 1 - Unknown order status

- **What was tested:** `GET /orders/99999/status` with a non-existent order ID.
- **Expected behavior:** Return a clean `404` error without crashing.
- **Actual behavior:** Returned `404`:

  ```json
  { "detail": "Order not found" }
  ```

- **Severity:** None
- **Status:** Working as intended

### Test 2 - Unknown return status

- **What was tested:** `GET /returns/99999/status` with a non-existent return ID.
- **Expected behavior:** Return a clean `404` error without crashing.
- **Actual behavior:** Returned `404`:

  ```json
  { "detail": "Return not found" }
  ```

- **Severity:** None
- **Status:** Working as intended

### Test 3 - Return against an unknown order

- **What was tested:** `POST /returns` with `order_id: 99999`.
- **Expected behavior:** Reject the request with `404` rather than silently creating an orphaned return.
- **Actual behavior:** Returned `404`:

  ```json
  { "detail": "Order not found" }
  ```

- **Severity:** None
- **Status:** Working as intended - existence check confirmed working

### Test 4 - Incorrect classifier field name

- **What was tested:** `POST /support/classify` using `message` instead of `text` as the request field.
- **Expected behavior:** Return a clear validation error.
- **Actual behavior:** Returned `422`, `Field required: text`; the field-name mismatch was found during integration testing.
- **Severity:** Low
- **Status:** Resolved - the correct field name, `text`, is documented in `API.md`.

## Known bug fixed during Day 3 integration

- **What was tested:** Frontend requests to the local backend.
- **Expected behavior:** Requests should reach the local FastAPI server at `http://localhost:8000`.
- **Actual behavior:** The frontend originally used `https://` for the local backend URL, causing requests to fail silently.
- **Severity:** High
- **Status:** Fixed - `frontend/script.js` now uses `http://localhost:8000`; the fix was verified in the browser console with no errors on retest.

## Frontend behavior and failure-mode testing (Deferred)

Manual frontend failure-mode testing (empty form submissions, backend-unavailable states, and general UI review) was scoped for this sprint but deferred due to time constraints ahead of the deadline. Core frontend functionality has been verified through the integration testing documented above (frontend-to-backend connectivity, all four live endpoint flows, 404 handling).

This does not block the MVP's core functionality, which has been fully tested end-to-end against live data. Recommended as a follow-up QA pass before any production deployment.
