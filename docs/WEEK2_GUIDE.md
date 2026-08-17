# Week 2 Guide & Roadmap - Self-Direction & Adaptability

**Team:** Fredrick (Lead), Stephen, Mark, Maria, Ibrahim
**Focus:** Learning independently, then holding your ground when requirements move

---

## 1. What This Week Actually Tests

Week 2 has two distinct halves, and they test different things. Don't treat them the same way.

| Half                             | What's Being Measured                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| Solo unfamiliar-domain challenge | Can you read docs and troubleshoot without being walked through it?                           |
| Mid-sprint pivot + refactor      | Can you re-scope calmly under a sudden constraint, and refactor without breaking what worked? |

Both halves are graded on **process visible in logs and commits**, not just on whether the final output works. A messy prototype with an honest, detailed blocker log scores better than a clean prototype with no evidence of how you got there.

---

## 2. Session-by-Session Breakdown

### Session 1 - The "Unfamiliar Domain" Challenge

**What happens:** Each of us works individually on an unfamiliar framework, library, or business model. Official docs only. No step-by-step tutorial, no asking teammates.

**What we submit:**

- Blocker Log (required format, see Section 4)
- Time-to-first-working-prototype
- Notes on sources used

**Team rule for this session:** No collaboration. If you see a teammate go quiet during this specific session, that's expected, not a red flag. Everyone still posts their normal daily update, just without task-specific detail.

### Session 2 - The Mid-Sprint Pivot

**What happens:** We work on the team task as usual, until minute 30, when a new constraint drops without warning (API spec changes, response time halved, budget cut 30%, or similar).

**What we do when it hits:**

1. Stop. Don't keep building against the old plan.
2. Re-estimate the backlog as a team.
3. Deprioritize nice-to-haves explicitly, out loud.
4. Adapt the approach.
5. Log every trade-off on the board, same-day, as it happens.

**What we submit:**

- Revised board scope
- Trade-off documentation
- Diff/refactor commit logs

### Session 3 - Retrospective & Refactor Audit

**What happens:** We clean up and refactor whatever got changed mid-sprint, then run a structured retrospective on how we handled the pivot.

**What we submit:**

- Refactored deliverable with regression checks (confirm nothing that worked before is now broken)
- Start / Stop / Continue retrospective notes

---

## 3. Team Roadmap for the Week

| Day   | Focus                                        | Fredrick's Role                                                                 |
| ----- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| Day 1 | Solo unfamiliar-domain challenge             | Work independently, log blockers live, no team check-ins on task specifics      |
| Day 2 | Debrief solo results, resume team task       | Light sync, share what everyone learned solo (briefly), then pick up team build |
| Day 3 | Team task execution, pivot likely lands here | Watch for the curveball, lead the calm re-scope when it hits                    |
| Day 4 | Refactor + regression check                  | Confirm nothing broke, clean up technical debt from the pivot                   |
| Day 5 | Retrospective, submissions                   | Run Start/Stop/Continue, finalize logs and board for submission                 |

Adjust days once real session dates are confirmed, this is a placeholder structure based on the 3-session pattern from Week 1.

---

## 4. Blocker Log Format (Required, Non-Negotiable)

Every blocker gets logged in this exact structure, live, not reconstructed afterward:

```markdown
## Blocker: [one-line description]

- **Tried:**
- **Result/error:**
- **Next hypothesis:**
- **Time spent so far:**
- **Rule of 30 checkpoint:** [did you hit 30 minutes before escalating?]
```

**The Rule of 30:** Troubleshoot actively for 30 minutes before escalating to anyone. Log every attempt as you go. Then ask for help without guilt, this isn't a stamina contest.

Each team member should have their own `logs/<name>/week2/blocker-log.md` in the repo.

---

## 5. Reminders for the Whole Team

**On the solo challenge:**

- Docs first, not Stack Overflow, not tutorials. That's literally what's being tested.
- Log as you go. A blocker log written from memory after the fact loses most of its evidentiary value.
- Don't panic-escalate at minute 5, and don't silently struggle for 3 hours. Both fail the actual test.

**On the pivot:**

- Treat it as part of the test, not an interruption to it. Panels score how you handle the curveball, not whether you avoided one.
- Cutting scope is not failure. Silently trying to deliver the original scope anyway, and missing the deadline, is worse than an honest, documented cut.
- Every trade-off goes on the board the same day. Batched updates at week's end defeat the purpose of the audit trail.

**On refactoring:**

- Go in expecting to refactor, not hoping to avoid it. Treating it as "fixing what I got wrong" instead of "adjusting for constraints that changed" leads to defensiveness, which shows in retros.
- Regression check means actually verifying the parts that worked before still work, not just eyeballing the diff.

**On communication (per our Charter, still in effect):**

- Daily updates continue throughout the week, format unchanged: what I did, what I'm doing next, any blockers.
- 2+ days of zero visible activity still triggers our escalation clause, this doesn't pause for Week 2.
- Commit format stays the same: `<type>: <what changed> - <why it matters>`.

---

## 6. What "Done" Looks Like by End of Week 2

- [ ] Individual blocker logs pushed for all 5 members
- [ ] Working prototype from the solo challenge (doesn't need to be polished, needs to be honest about what works and what doesn't)
- [ ] Board reflects the mid-sprint pivot with clear trade-off documentation
- [ ] Refactored deliverable merged, with confirmation nothing previously working broke
- [ ] Start / Stop / Continue retrospective notes, as a team
- [ ] Daily updates maintained throughout, no silent gaps

---

## 7. One Thing Worth Saying Out Loud to the Team

Week 1 rewarded strong coordination and catching each other's mistakes. Week 2's first half deliberately removes that safety net, it's solo by design. Don't expect to feel as capable on Day 1 of this week as we did by the end of Week 1. That's the point of the test, not a sign anything's wrong.
