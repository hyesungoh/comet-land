---
title: 'BOJ-10867 - Javascript'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 수열을 입력받은 후 중복된 수를 제외하고 오름차순으로 정렬하여 출력하는 문제. Set을 이용하여 중복되는 수들을 지운 후 Array.from을 이용하여 다시 Array로 만든 후 compareFunction을 이용하여 오름차순으로 출력하여 풀었다.
```javascript
const input = `10
1 4 2 3 1 4 2 3 1 2`.split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const l = Array.from(new Set(input[1].split(" ").map(Number)), (n) =>
    parseInt(n)
);

console.log(...l.sort((a, b) => a - b));

```