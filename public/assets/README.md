# SynapLift website assets

All static files for [synaplift.com](https://synaplift.com) live here. Deployed via the `synaplift-web` GitHub repo (synced from `fitmax_app/web/frontend`).

| Folder | Contents |
|--------|----------|
| `branding/` | App icon, wordmark, App Store 1024×1024 |
| `screenshots/` | Marketing phone screenshots |
| `badges/` | App Store / Google Play download badges |

Source copies also exist in the Flutter monorepo (`assets/branding/`, `store/app_store/`). After updating icons or screenshots, copy here and run `./scripts/sync_synaplift_website.sh --push`.

Paths are centralized in `lib/assets.ts`.
