# BridgePay — Web

The standalone marketing/introduction site for BridgePay — the main
domain a new visitor lands on before they've ever heard of the
product. This site never talks to the backend and holds no auth state
of its own; its only job is to explain what BridgePay is and hand
visitors off to the actual app.

## Related repos
- [BridgePay-Backend](https://github.com/Mark-Musyoka/BridgePay-Backend) — the FastAPI backend
- [BridgePay-Frontend](https://github.com/Mark-Musyoka/BridgePay-Frontend) — the actual product (login, dashboard, transfers, deposits/payouts, admin), intended to live on a subdomain (e.g. `app.bridgepay.<tld>`) while this site sits on the main domain

## Team
See [BridgePay-Backend's README](https://github.com/Mark-Musyoka/BridgePay-Backend/blob/main/README.md#team) for the team.

## Tech stack
Next.js (App Router) + TypeScript + Tailwind CSS — same stack as
BridgePay-Frontend, for consistency across the team, though this repo
is otherwise fully independent (no shared code, no dependency on the
other repo at build time).

## Status
| Page | Status |
|---|---|
| Landing/Home | Built — hero, 3 feature highlights, Get Started/Log in links out to the app |

That's the entire scope for now — see PLAN.md for what else might
belong here later (About, Pricing, a real blog/changelog, etc.), the
pre-launch checklist (§7 — a real breakdown of what's buildable now vs.
blocked on real content/decisions from the team), and what's
deliberately being kept out of scope.

## App Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout, metadata, fonts
│   ├── page.tsx         # The one page — the landing/home page
│   └── globals.css      # Same color theme as BridgePay-Frontend
├── lib/
│   └── config.ts        # APP_URL — where BridgePay-Frontend is deployed
└── public/
```

## Setup & Running Locally
```bash
cd BridgePay-Web
npm install
npm run dev
```
Visit `http://localhost:3000`. Copy `.env.local.example` to
`.env.local` and set `NEXT_PUBLIC_APP_URL` if you're running
BridgePay-Frontend locally too (its dev server defaults to `:3000`,
so run one of the two on a different port — e.g.
`npm run dev -- -p 3001` — to avoid a collision).

## CI & Deployment
`.github/workflows/ci.yml` runs `npm run build` and `npm run lint` on
every push to `main` and every PR. No deploy workflow yet — add one
the same way as BridgePay-Frontend's `deploy.yml` once a hosting
target and domain are decided.
