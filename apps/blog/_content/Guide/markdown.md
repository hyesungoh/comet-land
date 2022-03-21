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

> > Where some people measure progress in answers-right per test or tests-passed per year, we are more interested in Sistine-Chapel-Ceilings per Lifetime.
> >
> > — Alan Kay, A Personal Computer for Children of All Ages
>
> This is **great**.
>
> — Shu Ding.

## Lists

Unordered

- Lorem ipsum dolor.
- sit amet consectetur adipisicing elit.
- Iure, delectus.

Ordered

1. Lorem ipsum dolor.
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
