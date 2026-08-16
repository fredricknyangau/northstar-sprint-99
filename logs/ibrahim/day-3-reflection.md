# Day 3 Reflection

## What Happened ##

- Today was really critical for our MVP as focused on my QA and Documentation responsibilities by reviewing the API behaviour and supported the integration testing of the frontend against the local FastAPI backend. 
- I also manually tested important failure scenarios like unknown order IDs, unknown return IDs, and attempts to create returns for non-existent orders. I also reviewed the support-request classification endpoint and documented the validation behaviour for incorrect or missing fields.
- During integration testing, the team identified a high-severity issue where the frontend was using `https://` instead of `http://` when communicating with the local backend. By observation, this prevented frontend requests from reaching the local FastAPI server correctly. Fortunately, the team managed to fix this in the `frontend/script.js`, and the fix was verified through the browser console with no errors on retest.

## What Went Well ##

The QA process worked well because I was able to test both expected and failure scenarios rather than only checking successful responses. The API correctly returned `404` responses for unknown orders and returns, and the return endpoint correctly prevented the creation of an orphaned return. The classifier also correctly returned a `422` validation error when the wrong request field was supplied.

## What Was Harder Than Expected ##

-Testing the failure modes and ensuring that the frontend behaviour matched the API's expected responses was complex for me, but after several attempts with the team, we managed to tally the frontend behaviuor and API's responses. 
- It was also harder than expected to identify integration problems because an API can work correctly on its own while the frontend can still fail to communicate with it. This showed me that QA requires testing the system as a whole, not just individual endpoints.
- I also realised that manual QA documentation needs to be updated regularly as testing progresses. Some frontend scenarios, including empty form submissions, backend-unavailable states, and the general UI review, still require verification and need to be recorded accurately rather than being assumed to work.

## What I Learned ##

-Today i learned the importance of remaining persistent testing both and of documenting actual results against expected behaviour. I also learned that clear QA logs provide useful evidence of the MVP's reliability and how it makes easier for developers to understand and resolve issues. The integration bug reinforced the need to test frontend-to-backend communication as part of the complete user flow.

## Self-Assessment ##

-I made meaningful progress in my QA and Documentation role by testing API failure scenarios, identifying an important frontend/backend integration issue, documenting the results, and verifying the fix. I can improve further by completing the remaining frontend manual tests and being more systematic in recording severity, status, and evidence for every test case.