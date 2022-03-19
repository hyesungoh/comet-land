---
title: '프로그래머스-정수-내림차순으로-배치하기 - Javascript'
date: 2021-8-20 12:21:13
category: 'Algorithm'
draft: false
---
정수가 주어진 후, 해당 자릿수의 숫자들을 내림차순으로 배치하여 정수를 반환하는 문제. 주어진 정수를 배열화한 후, 내림차순으로 정렬, join한 값을 parseInt한 값을 반환하여 풀었다.
```javascript

// function solution(n) {
//     const nArr = Array.from(String(n));
//     const sortedArr = nArr.sort((a, b) => b - a);
//     return Number(sortedArr.join(""));
// }

const solution = (n) =>
    parseInt(
        Array.from(n + "")
            .sort((a, b) => b - a)
            .join("")
    );

```