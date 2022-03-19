---
title: '프로그래머스-자연수-뒤집어-배열로-만들기 - Javascript'
date: 2021-9-5 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어진 후, 해당 정수를 정수로 이루어진 배열로 만든 후 뒤집은 배열을 반환하는 문제. `Array.from`을 이용하여 풀었다.
```javascript
const solution = (n) => Array.from(String(n), (t) => Number(t)).reverse();

```