# Shoreline Clay

React + Vite + Tailwind CSS + GSAP starter site. See `PRD.md` for the full spec.

## Run it in Cursor
1. Unzip the folder and open it in Cursor (File > Open Folder).
2. Open the integrated terminal (Ctrl + ` or Cmd + `).
3. Install packages: `npm install`
4. Start the dev server: `npm run dev`
5. Open the local address it prints, usually http://localhost:5173

You need Node.js 18 or newer (`node -v` to check).

## Scripts
- `npm run dev` starts the dev server with hot reload.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

## Where things are
- `index.html` page shell and font links
- `src/main.jsx` React entry point
- `src/App.jsx` page layout, one component per section
- `src/components/` Navbar, Hero, Works, Workshops, Contact
- `src/lib/gsap.js` registers GSAP plugins once
- `src/lib/vessels.js` SVG pottery shapes
- `src/index.css` Tailwind layers and base styles
- `tailwind.config.js` colors and fonts

## Tips for Cursor
- `.cursorrules` tells Cursor's AI how this project is structured, so its edits match the stack.
- To tweak an animation, open the component and select the `useGSAP` block, then ask Cursor to change timing or easing.
