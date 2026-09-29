# Corporate Website

Modern corporate website for NTP Electric & Engineering, built with a cinematic hero experience, responsive project portfolio, and optimized production assets.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-06B6D4?logo=tailwindcss&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=ffffff)
![Motion](https://img.shields.io/badge/Motion-12.23.24-111111)
![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?logo=reactrouter&logoColor=ffffff)

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- TypeScript / TSX
- React Router 7
- Motion
- Radix UI
- Lucide React
- Local Sarabun font assets
- Optimized WebP/JPG image assets
- Cinematic MP4 hero assets

## Main Features

- Cinematic autoplay hero sequence with responsive video assets
- Transparent navbar at the top of the page, solid navbar after scroll
- Responsive company, service, certification, customer, and contact sections
- Project portfolio with card grid and dedicated project detail pages
- Lazy loaded routes and image lightbox
- Mobile, tablet, and desktop responsive layouts
- Production build optimized with route-level preloading

## Run Locally

```bash
npm install
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Project Structure

```text
src/app/components/    Reusable UI and experience components
src/app/pages/         Route pages
src/data/              Project data and image metadata
src/styles/            Global styles, theme, fonts, and cinematic CSS
public/cinematic/      Hero video and poster assets
public/images/         Website and project image assets
build/                 Vite build helpers
```

## Notes

This site is designed for a Thai corporate audience while keeping the codebase deployable as a standard Vite React app.
