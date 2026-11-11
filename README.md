# React lesson collection

Requires Node >=22.12.0. The 16 lessons retain their React 16 APIs and assets.

```bash
npm ci --ignore-scripts
npm start
npm test
npm run build
npm audit
```

`npm start` lets you select a lesson and serves it locally. `npm run build`
builds the first demonstration and writes to `dist/<lesson>/`. Build a selected
lesson with `npm run build -- 01-mini-react-project`.

Vite replaces the unsupported Webpack 4 and hot-loader chain. The Bootstrap
example uses the maintained Bootstrap 5 components. Dependencies with no imports
in the lessons have been removed. The committed lockfile makes installs reproducible.

The original unfinished exercises are preserved, including lesson 04, which intentionally contains JSX errors for students to correct. The security update does not supply exercise answers.
