---
title: 'Comet land guide'
subtitle: 'how to start'
date: 2022-03-26 17:50:00
category: 'Guide'
---

[![Total alerts](https://img.shields.io/lgtm/alerts/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/context:javascript) [![Continious Intergration](https://github.com/hyesungoh/comet-land/actions/workflows/CI.yml/badge.svg)](https://github.com/hyesungoh/comet-land/actions/workflows/CI.yml) [![codecov](https://codecov.io/gh/hyesungoh/comet-land/branch/main/graph/badge.svg?token=TA7LT3RQ1P)](https://codecov.io/gh/hyesungoh/comet-land) [![blog](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/yiddyz&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/yiddyz/runs) [![resume](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/inc4yo&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/inc4yo/runs)

![comet-land-blog](https://user-images.githubusercontent.com/26461307/159371599-95b2acd5-e5eb-482c-9ead-d8f601f034b5.png)

### [BLOG DEMO](https://comet-land-blog.vercel.app/)

![comet-land-resume](https://user-images.githubusercontent.com/26461307/160653172-c56a3b64-dfa9-4708-bf95-fca2fff47964.png)

### [RESUME DEMO](https://comet-land-resume.vercel.app/)

Blog and Resume template with turborepo

한국어 문서는 [다음 링크](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/ko-readme.md)에서 확인하실 수 있습니다.

## Blog Feature

![postGif](https://user-images.githubusercontent.com/26461307/159372336-e42c1a9c-9915-4d05-9e51-4882d681dc80.gif)

- 👔 Code highlight with line-highlight, line-numbers
- 🎨 Design with [NextUI](https://nextui.org/)
- 🍽 Table of contents
- 🎩 Dark mode

![kbarGif](https://user-images.githubusercontent.com/26461307/159372344-d628b817-d7f5-4322-813e-3468a62e79d6.gif)

- ⌨️ Search with [KBar](https://kbar.vercel.app/)
- 🔨 Configurable
- 🔊 [Utterances](https://utteranc.es/) Comment
- 🔭 Google Analytics
- 🔥 Hotjar
- 🏄 Lighthouse score

![blog lighthouse score](https://user-images.githubusercontent.com/26461307/161536154-b85caf9f-0f73-4224-a1e7-540723916ff7.gif)

## Resume Feature

- 🎨 Design with [NextUI](https://nextui.org/)
- 🎩 Dark mode
- ⌨️ Contact with [KBar](https://kbar.vercel.app/)
- 🔨 Configurable
- 🔭 Google Analytics
- 🔥 Hotjar
- 🏄 Lighthouse score

![resume lighthouse score](https://user-images.githubusercontent.com/26461307/161536162-63278484-ca52-42ed-89d4-951cd31e42c1.gif)

## How to start

`comet-land` has own generate package [`create-comet-land`](https://github.com/hyesungoh/create-comet-land)

```bash
npx create-comet-land
# or
yarn create comet-land
```

> Or using Fork or clone this repo

1. Install dependencies

```bash
yarn
```

2. Start Turbo !

```bash
yarn turbo run dev
# or just
yarn dev
```

4. Now you can see blog at `localhost:3000`, resume at `localhost:3001`

## How to configuration

Please see `packages/core/constants` directory.

and you can reconfigure at that directory's variable

- Analytics directory
  - GA ID
  - Hotjar ID
- Colors directory
  - color schema
- General directory
  - author image
  - default open-graph image
  - favicon
- SocialMedia directory
  - github
  - instagram
  - facebook
  - linkedin
  - twitter

and please check `apps/blog/_config/index.json` and `apps/resume/_config/index.json`.

This files are placing each app's configuration variable.

## How to use it

please read following link.

- [how to add blog post](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-blog.md)
- [how to custom resume](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-resume.md)

## How to deploy with vercel

### 1. Import git repository

![deploy step 1](https://user-images.githubusercontent.com/26461307/177278351-7b82fcbe-e6db-46bd-93f4-10e8524ef2bf.gif)

### 2. Select framework preset to `Next.js`

![deploy step 2](https://user-images.githubusercontent.com/26461307/177278363-509b3d69-f692-4458-8bc2-62173eef5e7e.gif)

### 3. Set root directory to `apps/blog` or `apps/resume`

![deploy step 3](https://user-images.githubusercontent.com/26461307/177278370-1651b4d7-e561-44df-8a62-a283450773d9.gif)

### 4. Set build command

![deploy step 4](https://user-images.githubusercontent.com/26461307/177278380-659ba348-7952-4875-9e19-0a006ad57c1a.gif)

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

### 5. Click the Deploy button! 🎉

![click the deploy button](https://user-images.githubusercontent.com/26461307/177278617-82982395-d1fc-46f1-8f96-f7cb7bae95d9.png)

### More information

This project using `turborepo`.

so, you can find more information at this [vercel guide](https://vercel.com/docs/concepts/monorepos/turborepo).

## How to add more packages

- scope packages

```bash
cd where-you-want
yarn add package-name
```

- global packages

```bash
yarn add package-name -W
```

- global dev packages

```bash
yarn add package-name -DW
```

## Trouble shootings

check [this wiki](https://github.com/hyesungoh/comet-land/wiki/Trouble-Shooting) please! it might be help

## Use Case

- [hyesungoh.xyz](https://github.com/hyesungoh/hyesungoh.xyz)

## Inspired

I inspired below blogs and resume.

- [Overreacted](https://overreacted.io/)
- [Yceffort](https://yceffort.kr/)
- [gatsby-starter-bee](https://gatsby-starter-bee.netlify.app/)
- [vallista-land](https://vallista.kr/)
- [hyunseob.github.io/resume](https://hyunseob.github.io/resume/)

## License

MIT
