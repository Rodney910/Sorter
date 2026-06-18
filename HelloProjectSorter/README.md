# Hello! Project Sorter & Rankings

React/Vite migration of the legacy ASP.NET/Razor Hello! Project sorter pages. The app keeps the legacy dataset shape and separates Idols, Songs, and free Ranking modules so new modules or languages can be added without duplicating the sorter engine.

## Commands

```bash
npm install react react-dom react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled lz-string seedrandom html-to-image html2canvas
npm install -D vite @vitejs/plugin-react eslint prettier
npm run dev
```

Useful checks:

```bash
npm run build
npm run lint
```

## Structure

```txt
public/assets/          Static image folders expected by the legacy data.
src/app/                Routes and module registry.
src/components/         Shared layout, common UI and particles.
src/data/               Datasets split by module and language.
src/features/home/      Home page.
src/features/sorter/    Shared Idols/Songs interactive merge-sort engine and UI.
src/features/ranking/   Free 15-slot pyramid ranking.
src/styles/             Global dark neon themes and responsive CSS.
src/utils/              Image, text, time, storage and download utilities.
```

## Add A New Module

Create a dataset module under `src/data/<module>/<lang>/`, then register it in `src/app/moduleRegistry.js` with an `id`, `type`, route, title, theme, image root and language map. Sorter modules can reuse `SorterPage`; non-battle modules should keep their own feature hook like Ranking does.

## Add A Dataset Version

Keep the legacy shape:

```js
export const dataSetVersion = 'idolsR17062026';
export const dataSet = {
  [dataSetVersion]: {
    options: [],
    characterData: [],
  },
};
export const imageRoot = '/assets/idols/';
export default { dataSetVersion, dataSet, imageRoot };
```

Do not rename `options`, `sub`, `characterData`, `opts`, `group`, `include`, `year`, `img`, `color`, `checked`, `key`, or `name`.

## Add Japanese Data

Replace the placeholders under `src/data/*/ja/` with separate `.jp.js` files that export the same shape as English. The routes `/idols/ja`, `/songs/ja`, and `/ranking/ja` are already wired.

## Update Images

Copy files into the matching public folder:

```txt
public/assets/icons/
public/assets/idols/
public/assets/songs/
public/assets/ranking/
```

The app resolves data URLs, absolute URLs, root-relative URLs, and relative filenames through `resolveImageSrc()` with cache busting based on dataset version.

## Technical Decisions

- Razor, Bootstrap and jQuery were removed.
- The shared sorter engine preserves interactive merge sort, ties, undo, progress, save data strings and query URL decoding.
- Idols and Songs use one sorter feature with module configuration instead of duplicated `main.js` and `main2.js`.
- Ranking remains independent because it is a free pyramid builder, not a battle sorter.
- MUI is used for app shell, buttons, dialogs, selects, snackbar and drawer navigation.
- CSS variables provide Home, Idols, Songs and Ranking neon themes without giant duplicated stylesheets.

## Preserved Sensitive Points

- Legacy dataset shape and version keys.
- `optStr` and `suboptStr` save format.
- `choices` values: `0` left, `1` right, `2` tie.
- Tie ranking display.
- Rows grow 1, 2, 3, 4, 5, then max 5 items.
- Robust image root handling across idols, songs and ranking.
- Ranking group filtering and max 15 warning.
