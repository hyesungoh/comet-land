# Comet-land

[![Total alerts](https://img.shields.io/lgtm/alerts/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/context:javascript)

![comet-land-blog](https://user-images.githubusercontent.com/26461307/159371599-95b2acd5-e5eb-482c-9ead-d8f601f034b5.png)

Blog and ~~Resume~~ template with turborepo

> Only blog support yet

한국어 문서는 [다음 링크](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/korean.md)에서 확인하실 수 있습니다.

## Feature

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

Please see [`DEMO`](https://comet-land-blog.vercel.app/)!

## How to start

1. Fork or clone this repo

2. Install dependencies

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
  - authorName
  - blogName
  - blogDescription
  - `blogRepoUrl` for utterance comment
  - blogUrl
  - defaultUrl
  - favicon
  - authorImage
  - defaultMetaBackground ~~not working yet~~
- SocialMedia directory
  please fill url not ends with '/'

  - github
  - instagram
  - facebook
  - linkedin
  - twitter

and please check `apps/blog/scripts/generate-static-files.js`

you should fill `blogUrl` variable for generating static files at server side. ~~This is refactor point~~

## How to add your content

You can add contents at `apps/blog/_content` directory.

like this format `apps/blogs/_content/category/postname.md`.

<details>

<summary>
markdown grammar is check this format 👈 (click this!)
</summary>

````markdown
---
title: 'Markdown Examples'
subtitle: 'example for writing markdown'
date: 2022-03-01 17:50:00
category: 'Guide'
---

## h2 heading

### h3 heading

#### h4 heading

##### h5 heading

###### h6 heading

## Emphasis

**This is bold text**

_This is italic text_

~~this is delete~~

## Blockquotes

> Develop. Preview. Ship. – Vercel

### nested

> > great power comes great responsibility
> >
> > — at spider man
>
> This is **awesome**.
>
> — hyesungoh

## Lists

Unordered

- Lorem ipsum dolor.
  - foo
    - bar
- sit amet consectetur adipisicing elit.
- Iure, delectus.

Ordered

1. Lorem ipsum dolor.
   1. lorem
      1. foo
2. sit amet consectetur adipisicing elit.
3. Iure, delectus.

## Code

Inline `code`

```js
import styled from '@emotion/styled';

export default function Foo({ bar }) {
  return (
    <div>
      <H1>Comet-land</H1>
    </div>
  );
}

const H1 = styled.h1`
  color: red;
`;
```

with line highlight

```js {1, 11-13}
import styled from '@emotion/styled';

export default function Foo({ bar }) {
  return (
    <div>
      <H1>Comet-land</H1>
    </div>
  );
}

const H1 = styled.h1`
  color: red;
`;
```

with line number

```js {1, 3} showLineNumbers
import styled from '@emotion/styled';

export default function Foo({ bar }) {
  return (
    <div>
      <H1>Comet-land</H1>
    </div>
  );
}

const H1 = styled.h1`
  color: red;
`;
```

## Links

- [Next.js](https://nextjs.org)
- [Vercel](http://vercel.com)

### Autolink

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Table

| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |

## Tasklist

- [ ] to do
- [x] done
````

</details>

## How to deploy with vercel

This project using `turborepo`.

so, you can deploy very easy with this [vercel guide](https://vercel.com/docs/concepts/git/monorepos#turborepo)

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

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

## License

MIT
