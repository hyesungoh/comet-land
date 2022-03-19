---
title: 'BOJ-18883 - Javascript'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
정수 n, m을 입력받은 후 n개의 줄을 출력한다. 각 줄에는 1부터 n\*m까지 출력하며 각 줄에는 m개의 수가 있어야한다. 매우 간단한 문제지만 출력 부분 각 줄마다 좌우 공백이 없어야하는 조건 때문에 여러번 WA 결과를 받게 되었다. 결국 각 줄을 담당하는 문자열과 전체 정답을 담당하는 문자열형 배열을 만들어 trim한 값을 추가, 출력시에도 trim하여 CA를 받게 되었다. 두 번째 풀이는 각 줄 마다 출력하여 풀었다. console.log도 파이썬의 print와 마찬가지로 자동적으로 개행을 포함하는 것을 알았다.
```javascript
// const input = `3 4`.split("\n");
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let temp = "";
let ans = "";

for (let i = 1; i <= n * m; i++) {
    temp += `${i} `;

    if (i % m === 0) {
        ans += temp.trim() + "\n";
        temp = "";
    }
}

console.log(ans.trim());

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [n, m] = input[0].split(" ").map(Number);
// let ans = "";

// for (let i = 1; i <= n * m; i++) {
//     ans += `${i} `;
//     if (i % m === 0) {
//         console.log(`${ans.trim()}\n`);
//         ans = "";
//     }
// }

```