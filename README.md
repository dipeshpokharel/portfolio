# Dipesh Pokharel — Professional Portfolio

A responsive, animated portfolio for Dipesh Pokharel, highlighting disaster risk management, geospatial research, multi-hazard early warning, civil engineering and selected research/projects.

## Run locally

```bash
npm install
npm run dev
```

Visit the URL printed by Vite (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

The production website is in `dist/`.

## Edit content

- `src/data.ts` contains the identity, projects, professional experience, skills, and education.
- `src/App.tsx` contains the layout, interactive project details, animations, and contact features.
- `src/styles.css` contains all design tokens, visual effects, and responsive styling.
- `public/Dipesh-Pokharel-Resume.docx` is the downloadable resume. Replace it with a newer version of the same filename when updated.

### Add an existing GitHub profile photo

The uploaded resume did not contain a portrait, and the user's existing GitHub repository was not accessible in this chat. This design intentionally uses a generative topographic hero instead of inventing a portrait. Once the actual photo is available, place it at `public/profile.jpg` and incorporate an `<img>` into the hero composition, with meaningful alt text.

### Deployment

The build uses a relative Vite base (`./`) to support GitHub Pages project subpaths and regular static hosting. You can upload `dist/` to any static host (GitHub Pages, Vercel, Netlify, etc.). For GitHub Pages, a GitHub Actions workflow is included at `.github/workflows/deploy.yml`; enable **GitHub Actions** as the Pages source under Settings → Pages.

### Notes

- All displayed accomplishments derive from the supplied resume. This project does not claim to be connected to or deployed to the user's GitHub repository.
- Abstract illustrated project artwork is decorative, not a photo of the actual projects.
- Supports keyboard-accessible project dialogs, mobile menu, email copy, and reduced-motion settings.
- The project-detail modal includes Escape and backdrop dismissal; when extending the dialog, consider adding a focus-trap library for strict modal focus management.
