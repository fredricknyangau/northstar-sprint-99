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
