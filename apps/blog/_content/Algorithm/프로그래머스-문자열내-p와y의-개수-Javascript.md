---
title: '프로그래머스-문자열내-p와y의-개수 - Javascript'
date: 2021-9-3 12:21:13
category: 'Algorithm'
draft: false
---
문자열이 주어질 때, 'p', 'P'의 수와 'y', 'Y'의 수가 같을 때 true를, 같지 않을 때 false를 반환하는 문제.배열화하여 reducer를 통해 p일 때 +1, y일 때 -1을 계산한 값을 반대를 반환하여 풀었다.
```javascript
const solution = (s) => {
    return !s
        .toUpperCase()
        .split("")
        .reduce((acc, cur) => {
            return acc + (cur === "P" ? 1 : cur === "Y" ? -1 : 0);
        }, 0);
};

```