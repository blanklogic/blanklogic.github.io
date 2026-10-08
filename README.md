# Jaymeson Koh — Portfolio

Personal portfolio for [blanklogic.github.io](https://blanklogic.github.io), built with React, TypeScript, and Vite. The site includes responsive layouts, light and dark themes, project filters, résumé access, and direct email contact.

## Local development

Use Node.js 22.12+ or a newer supported LTS version (verified with Node 24). The older Node 20.5 installation on this computer is incompatible with Vite 7.

```sh
npm ci
npm run dev
```

The development preview runs at `http://127.0.0.1:8080`.

```sh
npm run build
npx tsc -p tsconfig.app.json --noEmit
npm run preview
```

## Editing content

- `src/components/sections/` contains the hero, projects, experience, about, skills, contact, and footer sections.
- `src/components/sections/Projects.tsx` contains the project data and conceptual illustrations. Replace illustrations with real product screenshots when available. Add project-specific links only when verified.
- `src/index.css` contains the visual theme and responsive layouts.
- `src/assets/` contains the original portraits.
- `public/Jaymeson_Koh_Resume.pdf` is the public résumé, with the phone number omitted.
- `index.html` contains search metadata, the canonical URL, fonts, and the theme initialisation.

Theme preferences are saved locally. The contact link opens the visitor’s email application; the copy button copies the address. There is no message-sending backend or analytics integration.

## GitHub Pages

The existing `.github/workflows/deploy.yml` builds and deploys `dist` when changes are pushed to `main`, or when the workflow is run manually. Keep the repository’s Pages source set to **GitHub Actions**. The site is configured for the root domain `https://blanklogic.github.io/`.

To publish this redesign, review the local changes, commit them, and push to `main`. Check the deployment result in GitHub Actions before treating the redesign as live. Local edits and builds do not change the public site.

## Checks performed for the redesign

- Production build and TypeScript checks.
- ESLint on the changed application files.
- Browser checks for desktop and mobile layouts, project filtering, navigation, theme persistence, and email-copy feedback.
