---
title: 'BOJ-9656 - Javascript'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
n개의 돌을 1개 혹은 3개 가져가는 게임을 두 명이 한다. 모든 수를 완벽하게 할 시 이기는 사람의 이름을 출력하는 문제. 파이썬을 이용하여 풀었던 `돌 게임` 문제와 승패규칙만이 다른 문제. n이 홀수 짝수인지에 따라 정답이 달라져 나머지 값을 비교하여 풀었다.
```javascript
const input = `4`.split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
console.log(n % 2 === 0 ? "SK" : "CY");
```