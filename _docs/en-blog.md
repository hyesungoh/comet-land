## Before start

please check `apps/blog/_config/index.json`'s variable was filled.

## How to add your content

You can add contents at `apps/blog/_content` directory.

like this format `apps/blogs/_content/category/postname.md`.

markdown grammar is below format

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
