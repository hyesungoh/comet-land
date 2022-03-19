---
title: '프로그래머스-핸드폰-번호-가리기 - Javascript'
date: 2021-8-19 12:21:13
category: 'Algorithm'
draft: false
---
문자열이 주어진 후, 마지막 4자리 수를 제외하고 \*로 바꾼 문자열을 반환하는 문제. 문자열을 spread한 후, map을 이용해 길이와 비교하여 조건에 맞는 배열을 구성하였다. 배열을 join한 값을 반환하여 풀었다.
```javascript
// function solution(phone_number) {
//     const answer = [...phone_number].map((n, i) =>
//         i > phone_number.length - 5 ? n : "*"
//     );
//     return answer.join("");
// }

const solution = (pN) =>
    [...pN].map((n, i) => (i > pN.length - 5 ? n : "*")).join("");
```