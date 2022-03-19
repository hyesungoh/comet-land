---
title: 'BOJ-1463 - Javascript'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
n을 3으로 나누고, 2로 나누고, 1로 뺄 수 있을 때 1로 만들 수 있는 최소 연산의 수를 출력하는 문제. 첫 번째 풀이는 i / t 값을 Number로 바꾼 후 연산하였으나 타입 에러를 받게 되었다. 두 번째 풀이는 평범하게 나누기 연산을 사용하여 풀었더니 CA 결과를 받았다.
```javascript
// const input = `2`.split("\n");
// const input = require("fs").readFileSync("/dev/stdin").split("\n");
// const n = Number(input[0]);
// // const dp = Array.from(Array(n + 1), () => 0);
// const dp = [0, 0];

// for (let i = 2; i < n + 1; i++) {
//     dp.push(dp[i - 1] + 1);
//     if (i % 2 === 0) {
//         const t = Number(i / 2);
//         dp[i] = Math.min(dp[i], dp[t] + 1);
//     }

//     if (i % 3 === 0) {
//         const t = Number(i / 3);
//         dp[i] = Math.min(dp[i], dp[t] + 1);
//     }
// }

// console.log(dp[n].toString());

const n = Number(
    require("fs").readFileSync("/dev/stdin").toString().split(" ")
);
const dp = Array(n + 1);
dp[1] = 0;

for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
}
console.log(dp[n]);

```