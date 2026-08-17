## Day 4 Reflection - Fredrick

_(Written retrospectively on Day 5/Week 2 start, reconstructed from actual work done that day, not written in real time.)_

### What happened

Continued unblocking the team, confirmed all members had shared their task progress and backgrounds so remaining ambiguity around ownership was resolved. Supported Mark through a step-by-step database guide when he got stuck, and gave Ibrahim a structured, prompt-based approach to his documentation tasks given his local environment lacked Postgres and curl.

Pushed hard on Task 14, final demo packaging, testing all four backend endpoints end-to-end against real seeded data, confirming both success and failure paths (404 handling) worked correctly.

Discovered during integration testing that the frontend was never actually wired to the backend, script.js contained entirely hardcoded sample data, plus a protocol mismatch (https instead of http) that would have silently broken every request. Fixed both, verified via browser console and server logs.

Mid-fix, lost script.js during a merge conflict resolution with Maria's parallel frontend work. Diagnosed the loss precisely (confirmed it was gone from origin, not just local), restored it cleanly via checkout from a prior merged commit, and pushed it back as its own clean, conflict-free PR rather than fighting through the original conflict again.

### What went well

- Diagnosing the script.js loss methodically, checking local state, then remote state, before assuming anything, meant no time was wasted guessing at the wrong fix.
- Finding the frontend integration bug through deliberate end-to-end testing rather than assuming two working pieces were automatically connected.
- Adapting support style per teammate, technical steps for Mark, prompt scaffolding for Ibrahim given his setup constraints, rather than giving everyone identical instructions regardless of their situation.

### What was harder than expected

- Losing a working file mid-sprint was a genuine scare in the moment, even though it turned out fully recoverable. Worth remembering that panic doesn't help, checking state calmly does.
- Balancing being the one who keeps finding and fixing other people's gaps (schema bug, frontend bug) against making sure my own assigned tasks were moving forward at the same pace.

### Self-assessment

This was the most technically demanding day of the sprint, real integration bugs, a real data-loss scare, and genuine recovery under time pressure. Handled it by staying methodical rather than reactive at each step, which is the same instinct I want to carry forward, especially into Week 2 where self-directed problem-solving without a safety net is the entire point.
