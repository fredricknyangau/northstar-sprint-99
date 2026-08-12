# NORTHSTAR SPRINT — TEAM CHARTER
**Sprint:** The Northstar Sprint (Support Deflection MVP)
**Team:** Fredrick (Lead), Stephen, Mark, Maria, Ibrahim
**Duration:** Day 1 – Day 5

---

## 1. Team Purpose

Our team will work collaboratively to deliver the **Northstar Support Deflection MVP** within the 5-day sprint.

The MVP will focus on reducing manual support tickets by addressing at least **two of the three priority areas**:
- Order status
- Returns and refunds
- Stock availability

Our priority is to deliver a functional, demonstrable MVP while maintaining clear collaboration, task ownership, and an auditable record of contributions.

---

## 2. Team Members & Roles

| Member | Role | Responsibilities |
|---|---|---|
| Fredrick | Team Lead / Backend | Project coordination, GitHub/board setup, backend and API logic |
| Stephen | Backend Developer | API and application logic, integration support |
| Mark | Database Developer | Schema design, table relationships, data dictionary documentation |
| Maria | Frontend Developer | UI, user-facing parts of the MVP, responsive design |
| Ibrahim | QA & Documentation | Testing, bug tracking, go-live readiness note |

Roles may be adjusted as the project progresses based on workload and team needs, with changes communicated to the whole team.

---

## 3. Communication

- **Primary channel:** WhatsApp group for general updates and coordination.
- **Technical/task discussion:** GitHub Issues and Project board comments, linked to the relevant task.
- **Response SLA:** respond to important project messages within **4 hours** during working periods.
- **Blockers:** communicate immediately, not at the deadline.
- Important decisions are shared with the whole team, not made privately.

---

## 4. Daily Check-ins

Each member posts a short async update daily, covering:

- **Yesterday:** what I completed
- **Today:** what I'm working on
- **Blocked:** any problem preventing progress

Even "no blockers, on track" counts and is expected — silence is not an acceptable update.

---

## 5. Task Management

All project work is represented on the project board.

Every task must have:
- A clear description
- An assigned owner
- A priority (High / Med / Low)
- A Definition of Done
- A status

No task should represent more than **4 hours of work**. Larger tasks must be broken into smaller, independently checkable tasks before work starts.

Tasks are claimed by assigning yourself — no task is worked without an owner. If you finish early, pull the next unclaimed task in your lane.

---

## 6. GitHub Workflow

- `main` contains stable code only. All development happens on feature branches.
- **Branch format:** `feature/<name>/<task-name>` (e.g. `feature/stephen/order-status-api`)
- **Commit format:** `<type>: <what changed> - <why it matters>`
  - `feat: add order status endpoint - unblocks frontend polling`
  - `fix: validate unknown order IDs - prevents invalid API responses`
  - `docs: add API documentation - helps frontend integrate endpoints`
- Banned commit messages: `wip`, `update`, `fix stuff`
- Open a Pull Request before merging to `main` — no direct pushes of unfinished work.
- At least one other member reviews important changes before merge, checking functionality, code quality, naming, and compatibility with the rest of the system.

---

## 7. Deadlines & Accountability

- Members are responsible for completing assigned tasks within the agreed sprint timeline.
- Board status must be updated **the same day** the work happens — not batched at week's end.
- If a deadline is at risk, communicate this as early as possible and explain the blocker.
- The team prioritizes resolving blockers over assigning blame.

---

## 8. Escalation Clause (Non-negotiable)

- **Trigger:** zero visible activity (no commits, no board movement, no daily update) for **2+ consecutive days**.
- **Step 1:** Lead reaches out directly to check in — no blame, just checking on blockers.
- **Step 2:** if no response within 24 hours, Lead reassigns the task to keep the sprint moving and logs the change with reason on the board.
- **Step 3:** flagged in the Day 4 checkpoint audit as part of the contribution-balance review.

---

## 9. Conflict Resolution

1. Discuss the issue respectfully with the relevant team members.
2. Focus on project requirements and evidence, not personal preference.
3. Test possible solutions where appropriate.
4. If unresolved after brief discussion (15 min max), the Team Lead facilitates a decision based on requirements, quality, and available time.
5. The decision and reasoning are communicated to the whole team.

---

## 10. Definition of Done

A task is complete when:
- The implementation is finished and tested.
- Code is committed with a clear, convention-following message.
- The project board is updated to reflect the change.
- Required documentation is updated.
- The relevant Pull Request has been reviewed and approved (where applicable).

**Sprint-level Definition of Done:**
- Prototype covers at least 2 of the 3 ticket types, demoable end-to-end.
- 1-page go-live readiness note completed.
- Commit/edit history clearly traceable to board tasks for all 5 members.

---

## 11. Quality Standards

The team prioritizes, in order:
1. Working functionality
2. Correctness
3. Usability
4. Clean, maintainable code
5. Documentation
6. Traceable individual contributions

---

## 12. Collaboration Principle

The team aims for **balanced contribution rather than isolated ownership**. Members may assist one another, review work, or take on additional tasks when necessary — but individual contributions must remain visible and traceable through the project board, commits, and other agreed records.

---

## 13. Agreement

All team members agree to follow this Charter throughout the Northstar Sprint and to communicate openly when changes to responsibilities, timelines, or working arrangements are necessary.

| Name | Role | Confirmed |
|---|---|---|
| Fredrick | Team Lead |Yes |
| Stephen | Backend Developer |Confirmed |
| Mark | Database Developer |Yes |
| Maria | Frontend Developer |Yes |
| Ibrahim | QA & Documentation | |

**Date:** ____________________
