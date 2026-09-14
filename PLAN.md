# BridgePay-Web — Plan

## 1. What this is
BridgePay's main domain — the introduction a visitor sees before
they've ever heard of the product, distinct from the app itself
(BridgePay-Frontend), which is intended to live on a subdomain. This
split was decided while working on BridgePay-Frontend: that repo had
no proper "introduce the product first" screen, only a jump straight
to Login/Register, and a lightweight in-app Landing/Welcome screen was
planned there as a stand-in until this real site existed. This repo is
that real site.

This site is deliberately thin: it explains what BridgePay is and
links out to the app for Login/Register. It holds no auth state, makes
no backend calls, and shares no code with BridgePay-Frontend at build
time (same stack, independent repos).

## 2. Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS — same color theme (`globals.css`) as
  BridgePay-Frontend, copied over directly, for visual brand
  consistency between the two sites
- **Linking to the app:** `lib/config.ts`'s `APP_URL`
  (`NEXT_PUBLIC_APP_URL`), defaulting to `http://localhost:3001` for
  local dev — update once the app has a real deployed URL

## 3. Pages
| Page | Status | What it does |
|---|---|---|
| `/` (Home) | Built | Nav (logo, Log in, Get Started), hero headline + subheadline + primary CTA, 3 feature highlights (send instantly, deposit your way, withdraw anywhere), footer |

## 4. Design direction
Same principles used for BridgePay-Frontend's screens — calm and
simple, not a "dashboard" or an over-decorated marketing page:
- One accent color (reuses BridgePay-Frontend's `--color-primary`),
  neutral surfaces otherwise
- Flat design — no gradients, glow effects, glassmorphism, or
  decorative illustrations
- Generous whitespace, one clear primary action (Get Started) repeated
  at the top and in the hero, not a page full of competing CTAs
- Large, confident headline typography; everything else quieter

## 5. Current state
The entire site as scoped right now: one page (`/`), built. CI
(`.github/workflows/ci.yml`) runs build + lint on every push/PR, same
pattern as BridgePay-Frontend.

## 6. Possible future additions (not started, not committed to)
- About / team page
- A real changelog or blog
- Pricing/fees page, once fee structure is finalized (P2P transfers
  are free; deposit/payout provider fees, if any, aren't decided yet)
- A deploy workflow (`deploy.yml`), once a hosting target and the
  actual domain are decided — see BridgePay-Frontend's `deploy.yml`
  for the pattern (gated on CI passing via `workflow_run`)

## 7. Explicitly out of scope
- Any backend calls or auth state — this site only links to the app,
  it never talks to BridgePay-Backend directly
- Anything account-specific — no dashboard, no balance, nothing that
  requires being logged in lives here

## 8. Folder structure (as built)
```
.github/
  workflows/
    ci.yml           # build + lint on every push/PR
src/
  app/
    layout.tsx       # root layout, metadata, fonts
    page.tsx          # the one page — landing/home
    globals.css        # same color theme as BridgePay-Frontend
  lib/
    config.ts         # APP_URL and the two derived login/register links
public/
.env.local.example
README.md
PLAN.md
```
