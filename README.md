# Spell Listing Application

Simple Spell Card Listing using [D&D 5E API](https://5e-bits.github.io/docs/api). The following project showcases the usage of Material UI, Redux and React to fetch and render spells. 

There are additional functions such as saving favorite spells that is handled by redux functions to save and store favorite spells. Search function is available to search through the list of spells which is handled by the [Fuze.js](https://www.fusejs.io/) library to handle the fuzzy searching.

---

## To run the project
The project is updated from running **Create React App** (CRA) to [**Vite**](https://vite.dev/) using pnpm as a package manager. It is currently being hosted in [Vercel](https://vercel.com/).

### Install packages 
Install the required packages to run the project with your choice of package manager.
```bash
pnpm install
```

### To run the project
```bash
pnpm run dev
```

### TODO
- [ ] Add and update project test

---
### Project File Structure
```bash
.
├── README.md
├── build
│   ├── assets
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── Errors
│   │   │   └── ErrorBoundary.tsx
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── Header
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── InlineIconText
│   │   │   ├── InlineIconText.tsx
│   │   │   └── index.ts
│   │   ├── Navigation
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   └── Selector
│   │       ├── Selector.tsx
│   │       └── index.ts
│   ├── index.css
│   ├── main.tsx
│   ├── mock
│   │   └── dummySpellData.js
│   ├── pages
│   │   ├── FavouriteSpellPage
│   │   │   ├── FavouriteSpellPage.tsx
│   │   │   └── index.ts
│   │   ├── NotFound
│   │   │   ├── NotFound.tsx
│   │   │   └── index.ts
│   │   └── SpellListPage
│   │       ├── SpellListPage.tsx
│   │       ├── components
│   │       │   └── SpellDetails.tsx
│   │       └── index.ts
│   ├── routes
│   │   └── routes.ts
│   ├── services
│   │   ├── addToFavourite.ts
│   │   └── fetchSpell.ts
│   ├── store
│   │   └── store.ts
│   ├── test
│   │   ├── AddToFavourite.test.js
│   │   ├── App.test.js
│   │   └── Navigation.test.js
│   ├── types
│   │   └── spellTypes.ts
│   ├── utils
│   │   └── constant.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```