# Om Raje Nimbalkar — Public Service Website

A bilingual English and Marathi React website for public-service updates, employment-interest registration, upcoming events and citizen enquiries.

## Requirements

- Node.js 20 or later
- npm

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `main`. In the repository, open **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, and save. The workflow publishes the compiled `dist/` artifact; do not select **Deploy from a branch**, which would publish the uncompiled React/Vite source and show a blank page.

## Project notes

- The hero artwork switches between `public/cover.png` and `public/cover-marathi-1.png` with the language selector.
- Supplied photo assets are in `public/Photos/`.
- Employment and grievance forms are front-end demos. They do not send or store submissions; connect a secure service before using them to collect information.
