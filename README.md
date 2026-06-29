# SynapLift marketing site

Source for [synaplift.com](https://synaplift.com). Deployed via `ozangr35/synaplift-web` (GitHub Pages).

```bash
cd web/frontend && npm run dev
# → http://localhost:3000
```

## Sync to live site

```bash
./scripts/sync_synaplift_website.sh --push
```

## Assets

All static files live under `public/assets/` (branding, screenshots, badges). Paths are defined in `lib/assets.ts`. Copy new icons from `assets/branding/` or `store/app_store/` in the Flutter monorepo into `public/assets/branding/` before syncing.

## Pages

Home (features + pricing), Product, **Pricing**, FAQ, About, Contact, Privacy, Terms, Pitch.
