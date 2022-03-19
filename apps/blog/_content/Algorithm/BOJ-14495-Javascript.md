---
title: 'BOJ-14495 - Javascript'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
점화식이 문제에 써있는 단순 dp 구현 문제. Array의 크기를 먼저 생성후 하는 방법, Push하는 방법으로 풀어봤으나 모두 WA 결과를 받게되었다. 다른 사람의 풀이를 보니 n이 커질 시 BigInt형으로 연산을 해야 풀리는 문제였다.
```javascript
const input = `10`.split("\n");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = BigInt(input[0]);

const solve = (tn) => {
    const l = [0, 1, 1, 1];

    for (let i = 4; i <= tn; i++) {
        l.push(BigInt(l[i - 1]) + BigInt(l[i - 3]));
    }

    return l[tn];
};

console.log(solve(n).toString());

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const n = BigInt(input[0]);
// const l = [0, 1, 1, 1];

// for (let i = 4; i < n; i++) {
//     l.push(l[i - 3] + l[i - 1]);
// }

// console.log(l[n].toString().trim());

```