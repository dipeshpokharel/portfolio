# Dipesh Pokharel — Portfolio

This is a dependency-free static website. Open `index.html` directly or preview the repository root with `python -m http.server 8000`, then visit `http://localhost:8000`.

## Updating portfolio content

- Edit experience, projects, skills and education in `js/portfolio-data.js`.
- Update the introduction, selected contributions and contact details in `index.html`.
- Replace `dp.jpg` to change the portrait; keep its filename or update the image references in `index.html`.
- Replace `Dipesh Pokharel_Resume.docx` to update the downloadable résumé; keep the filename or update both résumé links.
- Update the canonical URL, social preview URL, JSON-LD, sitemap and `CNAME` together if the public domain changes.

## Deployment

The site is served from the repository root and needs no build step. `CNAME` records the existing custom domain. No hosting workflow or provider configuration is included in this repository, so confirm the configured static host publishes the repository root and preserves that domain before deploying.
