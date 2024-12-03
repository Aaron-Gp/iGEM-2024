# Team BIT 2024 Wiki

This repository contains all coding assets to generate our team's wiki.
Images, photos, icons and fonts are stored on `static.igem.wiki` using [tools.igem.org](https://tools.igem.org).

Visit our website on [https://2024.igem.wiki/bit](https://2024.igem.wiki/bit) !


## Quick Start

Our project is built and tested on nodejs v18.20.0, please use nodejs v18.x or newer.

### Building locally

To work locally with this project, follow the steps below:

#### Install

```bash
git clone https://gitlab.igem.org/2024/bit.git
cd bit
corepack enable
corepack prepare pnpm@latest-9 --activate
pnpm install
```

#### Execute

Comment the `baseURL` configuration item in `nuxt.config.ts`, and then

```bash
pnpm dev
```

#### Static Site Generation

```bash
pnpm generate
```

## About Our Project

### Files

    |__ .output/            -> Generated SSG files
    |__ assets/             -> CSS and JavaScript files
    |__ components/    
    |__ content/            -> Used by Nuxt Content
    |__ layouts/              
    |__ pages/              -> File's name is the routing
    |__ providers/           
    |__ public/models/      -> To contain Alphafold protein models cuz it cannot be uploaded to the web storage
    |__ server/             -> Unused
    |__ .gitignore         
    |__ .gitlab-ci.yml      -> Automated flow for building, testing and deploying the website
    |__ LICENSE             -> License CC-by-4.0, all wikis are required to have this license
    |__ README.md           
    |__ app.vue             -> Main entrance for the website
    |__ error.vue           -> Error page for the website
    |__ nuxt.config.ts
    |__ package.json        -> Nodejs dependencies
    |__ tailwind.config.ts

### Dependency

- Nuxt 3
- Nuxt Content
- element-plus
- tailwindcss
- etc. (see `package.json`)


