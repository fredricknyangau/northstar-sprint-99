# Frontend QA log — Issue #17

**Scope/date:** Static UI flow review on 15 August 2026. Browser automation could not start in this QA environment because the browser runtime lacks permission to resolve its host path. Results below are directly verified from `frontend/index.html`, `frontend/script.js`, and CSS. The key finding is definitive: there are **no `fetch()` calls**, so none of the forms reaches the API.

| Test case | Input | Expected result | Actual result | Pass/Fail | Notes |
|---|---|---|---|---|---|
| Order-status happy path | Enter `2`, select **Check Status** | Call `GET /orders/2/status`; show actual status | Shows hard-coded “Designer Silk Scarf / Shipped” for entered ID; no API call | **Fail** | Any ID appears valid, including unknown/malformed IDs. |
| Order empty submission | Blank order ID | Clear validation message | “Please enter an Order ID.” is shown | Pass | User-facing text is clear. |
| Order invalid/non-existent ID | `abc`, `999`, `2.5` | Block invalid input or show API not-found error | Shows fabricated shipped result | **Fail** | Input is untyped text and has no client validation. |
| Order network/slow/no-result state | Disconnect/slow/404 | Loading then friendly failure/no-result state | Not possible: no request, loading state, error handler, or no-result branch | **Fail** | P0 integration gap. |
| Return happy path | Order `2`, reason `wrong size`, submit | `POST /returns`; show API confirmation | Generates random local ID and “Pending”; no API call | **Fail** | Confirmation may falsely imply a created return. |
| Return empty fields | Blank order or reason | Clear validation message | Clear messages shown for each missing field | Pass | Validation only checks blank strings. |
| Return invalid/non-existent/refunded order | `abc`, `999`, order `8` | Validate or show API eligibility/not-found error | Generates a success response for all non-empty inputs | **Fail** | No eligibility/duplicate/refund handling. |
| Return network/slow/API error | Disconnect/slow/422/404/500 | Loading then user-friendly error | No request, loading state, disabled button, or error mapping | **Fail** | — |
| Return-status flow | Enter return ID, select **Check Status** | Call `GET /returns/{id}/status`; show actual status | Shows hard-coded order `18` and “Pending” for every non-empty ID | **Fail** | Third UI flow is also disconnected. |
| Labels and keyboard basics | Tab to inputs/buttons | Associated labels and usable controls | All primary inputs have `<label for>` links; native controls are keyboard-focusable | Pass | Good baseline. |
| Focus/submit affordances | Focus controls; press Enter | Visible focus and form submit support | Inputs remove the default outline and only change border; controls are not in `<form>` elements, so Enter does not submit | **Fail** | Focus cue is subtle; no semantic form behavior. |
| Result accessibility/security | Submit return reason containing HTML | Announced, safely rendered result | Result regions have no `aria-live`; user values are inserted with `innerHTML` | **Fail** | Potential DOM XSS (e.g. a crafted return reason); use `textContent`/DOM nodes. |

## Summary

The UI has clear empty-field messages and correctly associated labels, but it is a mock prototype rather than an end-to-end deflection experience. There is no API integration, loading/disabled state, API-error handling, no-result state, or assistive-technology announcement. Product availability is only a classifier label; it has no stock form or backend endpoint.