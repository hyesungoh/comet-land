---
title: '프로그래머스-약수의-합 - Javascript'
date: 2021-9-2 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어질 때, n의 모든 약수의 합을 반환하는 문제. 재귀적으로 i를 하나씩 키워 계산하는 방법으로 풀었다.
```javascript
function solution(n, i=1) {
    if (n === i || n === 0) return n
    return n % i === 0 ? i + solution(n, i+1) : 0 + solution(n, i+1);
}
```