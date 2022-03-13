---
title: 'Svelte - Cannot convert undefined to object Error when using axios'
date: 2020-11-15 20:24:00
category: 'Svelte'
draft: false
---

> mergeConfig.js:92 Uncaught TypeError: Cannot convert undefined or null to object

## 문제

Axios의 최신 버전의 svelte 지원 issue라고 한다.

## 해결 방법

`0.21.1` 버전으로 다운그레이드하면 해결할 수 있다.

```json
// package.json
{
  "name": "svelte-app",
  // ...
  "dependencies": {
    "axios": "0.21.1"
    // ...
  }
}
```

```bash
npm i

npm run dev
```

## 참고

- [reddit](https://www.reddit.com/r/sveltejs/comments/qiityh/how_to_use_axios_in_svelte/hil7ei7/)
