# QA Log

## API behavior entries

### Test 1 — Unknown order status

- **What was tested:** `GET /orders/99999/status` with a non-existent order ID.
- **Expected behavior:** Return a clean `404` error without crashing.
- **Actual behavior:** Returned `404`:

  ```json
  {"detail":"Order not found"}
  ```

- **Severity:** None
- **Status:** Working as intended

### Test 2 — Unknown return status

- **What was tested:** `GET /returns/99999/status` with a non-existent return ID.
- **Expected behavior:** Return a clean `404` error without crashing.
- **Actual behavior:** Returned `404`:

  ```json
  {"detail":"Return not found"}
  ```

- **Severity:** None
- **Status:** Working as intended

### Test 3 — Return against an unknown order

- **What was tested:** `POST /returns` with `order_id: 99999`.
- **Expected behavior:** Reject the request with `404` rather than silently creating an orphaned return.
- **Actual behavior:** Returned `404`:

  ```json
  {"detail":"Order not found"}
  ```

- **Severity:** None
- **Status:** Working as intended — existence check confirmed working

### Test 4 — Incorrect classifier field name

- **What was tested:** `POST /support/classify` using `message` instead of `text` as the request field.
- **Expected behavior:** Return a clear validation error.
- **Actual behavior:** Returned `422`, `Field required: text`; the field-name mismatch was found during integration testing.
- **Severity:** Low
- **Status:** Resolved — the correct field name, `text`, is documented in `API.md`.

## Known bug fixed during Day 3 integration

- **What was tested:** Frontend requests to the local backend.
- **Expected behavior:** Requests should reach the local FastAPI server at `http://localhost:8000`.
- **Actual behavior:** The frontend originally used `https://` for the local backend URL, causing requests to fail silently.
- **Severity:** High
- **Status:** Fixed — `frontend/script.js` now uses `http://localhost:8000`; the fix was verified in the browser console with no errors on retest.

## Frontend behavior and failure-mode testing

### Test 1 — Order status form: empty submission

- **What was tested:** Submit the order-status form with no order ID.
- **Expected behavior:** Show a validation message without crashing.
- **Actual behavior:** [Ibrahim fills this in after testing]
- **Severity:** To be assessed after testing
- **Status:** Pending manual verification

### Test 2 — Order status form: backend not running

- **What was tested:** Submit the order-status form while the backend is not running.
- **Expected behavior:** Show a clear “could not reach server” message.
- **Actual behavior:** [Ibrahim fills this in after testing]
- **Severity:** To be assessed after testing
- **Status:** Pending manual verification

### Test 3 — Return form: missing fields

- **What was tested:** Submit the return form with an empty order ID or an empty reason.
- **Expected behavior:** Show a validation message for each missing field.
- **Actual behavior:** [Ibrahim fills this in after testing]
- **Severity:** To be assessed after testing
- **Status:** Pending manual verification

### Test 4 — Return status form: backend not running

- **What was tested:** Submit the return-status form while the backend is not running.
- **Expected behavior:** Show a clear “could not reach server” message.
- **Actual behavior:** [Ibrahim fills this in after testing]
- **Severity:** To be assessed after testing
- **Status:** Pending manual verification

### Test 5 — General UI review

- **What was tested:** Review layout, labels, and user-facing error messages while exercising the frontend.
- **Expected behavior:** Clear labels, understandable messages, and no material layout issues.
- **Actual behavior:** [Ibrahim fills this in]
- **Severity:** To be assessed after testing
- **Status:** Pending manual verification
