---
title: '프로그래머스-약수의-개수와-덧셈 - Javascript'
date: 2021-9-8 12:21:13
category: 'Algorithm'
draft: false
---
주어진 정수 두개의 사이 숫자들의 약수가 홀수인 경우 빼고, 짝수인 경우 더한 값을 반환하는 문제. 첫 풀이는 약수를 담은 배열을 이용하여 풀었다. 두 번째 풀이는 제곱근이 정수일 때, 약수의 개수가 홀수인 것을 이용해여 풀었으며, 세 번째 풀이는 이를 이용하여 숏코딩하였다.
```javascript
// const getAliquot = (n) => {
//     const aliquots = [];
//     for (let i = 1; i < n ** 0.5 + 1; i++) {
//         if (n % i === 0) {
//             aliquots.push(i);
//             if (n / i !== i) aliquots.push(n / i);
//         }
//     }
//     return aliquots;
// };

// const solution = (left, right) => {
//     let answer = 0;

//     for (let i = left; i < right + 1; i++) {
//         const { length } = getAliquot(i);
//         answer += length % 2 === 0 ? i : -i;
//     }

//     return answer;
// };

// const solution = (left, right) => {
//     let answer = 0;
//     for (let i = left; i < right + 1; i++)
//         answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
//     return answer;
// };

const solution = (l, r) =>
    Array(r - l + 1)
        .fill()
        .map((_, i) => l + i)
        .reduce(
            (ac, cu) => (ac += Number.isInteger(Math.sqrt(cu)) ? -cu : cu),
            0
        );

```