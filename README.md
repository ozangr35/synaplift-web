# SynapLift website

Static marketing site for [SynapLift](https://synaplift.com) — no database, no backend, no API keys.

## Run locally

```bash
./start.sh
```

Open **http://localhost:3000**

First time only: `npm install`

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Marketing landing |
| `/pitch` | Investor / event overview |
| `/about` | Company story |
| `/contact` | Support |
| `/privacy` | GDPR privacy policy |
| `/terms` | Terms + medical disclaimer |

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages.

**Custom domain:** `synaplift.com` (see `public/CNAME`).

After first deploy, enable **Settings → Pages → Source: GitHub Actions** in this repo.

### DNS (registrar)

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ozangr35.github.io` |

App legal URLs in the mobile repo must match production domain.
