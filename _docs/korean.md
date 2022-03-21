# Comet-land

[![Total alerts](https://img.shields.io/lgtm/alerts/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hyesungoh/comet-land.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hyesungoh/comet-land/context:javascript)

![comet-land-blog](https://user-images.githubusercontent.com/26461307/159371599-95b2acd5-e5eb-482c-9ead-d8f601f034b5.png)

turborepo를 사용한 블로그와 ~~이력서~~ 템플릿입니다.

> 아직 블로그만 사용 가능합니다

## 기능

![postGif](https://user-images.githubusercontent.com/26461307/159372336-e42c1a9c-9915-4d05-9e51-4882d681dc80.gif)

- 👔 강조 줄, 줄 수 기능이 있는 코드 하이라이트
- 🎨 [NextUI](https://nextui.org/)를 사용한 디자인
- 🍽 Table of contents
- 🎩 Dark mode

![kbarGif](https://user-images.githubusercontent.com/26461307/159372344-d628b817-d7f5-4322-813e-3468a62e79d6.gif)

- ⌨️ Search with [KBar](https://kbar.vercel.app/)
- 🔨 수정 가능
- 🔊 [Utterances](https://utteranc.es/) 댓글
- 🔭 Google Analytics
- 🔥 Hotjar

자세한 기능은 [`DEMO`](https://comet-land-blog.vercel.app/)를 확인해주세요!

## 시작하는 방법

1. 해당 레포지토리를 Fork 혹은 clone 해주세요

2. dependencies를 설치해주세요

```bash
yarn
```

2. 터보 시작 ~~!

```bash
yarn turbo run dev
# or just
yarn dev
```

4. 이제 블로그를 `localhost:3000` 포트에서, 이력서를 `localhost:3001` 포트에서 확인할 수 있어요

## 수정하는 방법

`packages/core/constants` 디렉토리를 확인해주세요.

그 후 해당 디렉토리의 변수들을 수정하는 방법으로 간단히 수정할 수 있습니다.

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
  꼭 '/'로 끊나지 않는 url을 채워주세요!

  - github
  - instagram
  - facebook
  - linkedin
  - twitter

그리고 `apps/blog/scripts/generate-static-files.js` 파일을 확인해주세요.

서버 사이드에서 static file들을 생성하기 위해 `blogUrl` 변수를 채워주세요. ~~리팩토링할 부분입니다~~

## 콘텐츠 추가하는 방법

`apps/blog/_content` 디렉토리에 콘텐츠를 추가하시면 됩니다.

`apps/blogs/_content/category/postname.md` 이런 포맷으로요!

<details>

<summary>
마크다운 작성법은 해당 파일을 확인해보시면 좋을 것같아요 👈 (클릭해주세요!)
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

## Vercel을 이용해 배포하는 방법

이 프로젝트는 `turborepo`를 사용하였습니다.

그렇기 때문에 [vercel guide](https://vercel.com/docs/concepts/git/monorepos#turborepo)를 보고 쉽게 배포할 수 있습니다 :D

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

## 추가 패키지 설치하는 방법

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

[위키](https://github.com/hyesungoh/comet-land/wiki/Trouble-Shooting)를 참고해주세요. 도움이 될 수도 있습니다..!
