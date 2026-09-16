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
| `/` (Home) | Built | Nav (logo, FAQ, Log in, Get Started), hero headline + subheadline + primary CTA, 3 feature highlights (send instantly, deposit your way, withdraw anywhere), footer, sticky mobile "Get Started" bar |
| `/faq` | Built | Real questions/answers about how BridgePay actually works — no invented claims |
| `/privacy` | Built (draft) | Standard privacy-policy template with a visible "not yet reviewed" notice and `[bracketed]` placeholders for anything needing real input — not the actual legal policy yet |
| `/terms` | Built (draft) | Same treatment as `/privacy`, for terms & conditions |

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
Four pages: Home, FAQ, Privacy (draft), Terms (draft) — see section 3.
Also built: a custom 404 page, `robots.txt`, `sitemap.xml`, a
code-generated Open Graph share image, per-page metadata (titles +
descriptions), and a sticky mobile "Get Started" bar. `SiteHeader`/
`SiteFooter` are now shared components so every page stays consistent
as more get added. CI (`.github/workflows/ci.yml`) runs build + lint
on every push/PR, same pattern as BridgePay-Frontend.

## 6. Possible future additions (not started, not committed to)
- About / team page
- A real changelog or blog
- Pricing/fees page, once fee structure is finalized (P2P transfers
  are free; deposit/payout provider fees, if any, aren't decided yet)
- A deploy workflow (`deploy.yml`), once a hosting target and the
  actual domain are decided — see BridgePay-Frontend's `deploy.yml`
  for the pattern (gated on CI passing via `workflow_run`)

## 7. Pre-launch checklist
Two groups: things buildable now with no new input, and things
blocked on real content, copy, or account setup only the team can
provide — listed so nothing gets silently invented (a fake team photo,
a made-up response-time promise, placeholder legal text passed off as
real) to fill a gap.

**Style rules — verified against current copy, will re-check on every
future change:**
| Rule | Status |
|---|---|
| No purple gradients | ✅ no gradients used at all |
| No pill-shaped buttons | ✅ `rounded-lg`/`rounded-xl`, not `rounded-full` |
| No fake reviews or fake metrics | ✅ none present |
| No vague hero text | ✅ hero names the actual deposit/payout methods |
| No emoji icons | ✅ none used |
| No em dashes | ✅ fixed — hero copy and `<title>` were using them, rewritten |
| No over-the-top scroll animations | ✅ static page, no scroll effects |
| No cursor animations | ✅ none |
| No fake customer counters | ✅ none |
| No AI slop photos/copy | ✅ no stock/AI imagery; copy is plain and specific |

**Buildable now, no new content needed — all done:**
| Item | Status |
|---|---|
| Custom 404 page | ✅ Built |
| `robots.txt` | ✅ Built (`app/robots.ts`), points at the sitemap |
| Sitemap | ✅ Built (`app/sitemap.ts`), lists all four pages |
| Unique page titles, meta descriptions | ✅ Each page sets its own via Next's `Metadata` export |
| Social share (OG) image | ✅ Code-generated (`app/opengraph-image.tsx`), no designed asset needed |
| Sticky mobile CTA | ✅ Built, mobile only |
| Internal links | ✅ Nav/footer now link Home ↔ FAQ ↔ Privacy ↔ Terms |
| Breadcrumbs | Still not meaningful — four flat top-level pages, no nesting to show a trail for |
| Proper icon set | Not built — current design is intentionally icon-light (text-only feature list); revisit if that changes |

**Blocked on real content/decisions from the team — not something to
invent:**
| Item | Blocked on |
|---|---|
| Real photo of the founder/team | An actual photo file |
| Case study section | A real customer story to tell |
| Response time promise | An actual committed SLA — "we reply within X" is a real policy decision, not mine to pick |
| Privacy policy + terms & conditions — real, final text | Drafts now exist at `/privacy` and `/terms` with a visible "not yet reviewed" notice — need a lawyer's review and every `[bracketed]` placeholder filled in with real details before that notice comes off |
| Local business schema | A real business address/hours to encode — does BridgePay have a physical location to list? |
| Maps and directions | Same — needs a real address |
| Google Analytics | A GA4 property + tracking ID from your own Google account |
| Thank-you page after inquiries | An inquiry/contact form has to exist first — none does yet |
| Custom domain connected | An actual domain purchased/pointed at this site |
| "Made with AI" tag removed | N/A — nothing in this codebase adds one; this only applies if the team also has a Lovable-hosted version with that badge |
| Favicon | A generic one already exists (reused from BridgePay-Frontend) — ask if you want something Web-specific instead |

## 8. Explicitly out of scope
- Any backend calls or auth state — this site only links to the app,
  it never talks to BridgePay-Backend directly
- Anything account-specific — no dashboard, no balance, nothing that
  requires being logged in lives here

## 9. Folder structure (as built)
```
.github/
  workflows/
    ci.yml               # build + lint on every push/PR
src/
  app/
    layout.tsx           # root layout, metadata, fonts
    page.tsx              # Home
    faq/page.tsx           # FAQ
    privacy/page.tsx        # Privacy Policy (draft, needs legal review)
    terms/page.tsx           # Terms & Conditions (draft, needs legal review)
    not-found.tsx           # custom 404
    robots.ts                # robots.txt
    sitemap.ts                # sitemap.xml
    opengraph-image.tsx        # code-generated social share image
    globals.css                # same color theme as BridgePay-Frontend
  components/
    SiteHeader.tsx        # shared nav, every page uses this
    SiteFooter.tsx         # shared footer, every page uses this
    StickyMobileCta.tsx      # mobile-only persistent "Get Started" bar
  lib/
    config.ts             # APP_URL/login/register links, SITE_URL
public/
.env.local.example
README.md
PLAN.md
```
