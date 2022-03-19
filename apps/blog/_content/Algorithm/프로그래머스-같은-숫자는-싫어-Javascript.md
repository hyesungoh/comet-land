---
title: '프로그래머스-같은-숫자는-싫어 - Javascript'
date: 2021-8-30 12:21:13
category: 'Algorithm'
draft: false
---
배열에서 연속된 숫자 중 중복되는 수를 제외한 배열을 반환하는 문제. 첫 풀이는 주어진 배열을 기준으로 반복을 수행하며, 새로운 배열의 마지막 값과 비교하여 풀었다. 두 번째 풀이는 filter를 이용하여 주어진 배열의 idx-1 값과 비교하여 풀었다.
```javascript
// function solution(arr) {
//     const answer = [];
//     arr.forEach((elem) => {
//         if (answer[answer.length - 1] === elem) return;
//         answer.push(elem);
//     });
//     return answer;
// }

const solution = (arr) => arr.filter((cur, idx) => cur !== arr[idx - 1]);

```