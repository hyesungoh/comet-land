---
title: '프로그래머스-수박수박수박 - Javascript'
date: 2021-8-27 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어졌을 때 "수", "박"을 순서와 n에 맞게 반환하는 문제. repeat을 이용하여 긴 문자열을 만든 후 slice를 이용해 처음부터 n까지 잘라서 반환하여 풀었다.
```javascript
const solution = (n) => "수박".repeat(n/2+1).slice(0, n);

```