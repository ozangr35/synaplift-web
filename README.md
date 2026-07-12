# SynapLift marketing site

Source for [synaplift.com](https://synaplift.com). Deployed via `ozangr35/synaplift-web` (GitHub Pages).

```bash
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_GA_MEASUREMENT_ID
npm run dev
# → http://localhost:3000
```

### Google Analytics

1. Create a GA4 property and web data stream for `synaplift.com`.
2. Copy the measurement ID (`G-XXXXXXXXXX`).
3. **Local:** set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.
4. **Production:** add the same value as a GitHub repository variable named `NEXT_PUBLIC_GA_MEASUREMENT_ID` (Settings → Secrets and variables → Actions → Variables).

Analytics is skipped when the ID is missing, so builds work without it.

## Sync to live site

```bash
./scripts/sync_synaplift_website.sh --push
```

## Assets

All static files live under `public/assets/` (branding, screenshots, badges). Paths are defined in `lib/assets.ts`. Copy new icons from `assets/branding/` or `store/app_store/` in the Flutter monorepo into `public/assets/branding/` before syncing.

## Pages

Home (features + pricing), Product, **Pricing**, FAQ, About, Contact, Privacy, Terms, Pitch.
