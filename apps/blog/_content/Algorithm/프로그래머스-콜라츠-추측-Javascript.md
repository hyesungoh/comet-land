---
title: '프로그래머스-콜라츠-추측 - Javascript'
date: 2021-9-1 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어진 후 콜라츠 추측을 통해 몇 번만에 1이 되었는 지 반환하는 문제. 재귀적으로 풀었다.
```javascript
const solution = (n, cnt = 0) => {
    if (cnt > 500) return -1;
    if (n === 1) return cnt;
    return solution(n % 2 === 0 ? n / 2 : n * 3 + 1, cnt + 1);
};

```