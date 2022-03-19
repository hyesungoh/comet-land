---
title: '프로그래머스-소수-찾기 - Javascript'
date: 2021-9-4 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어진 후, 1부터 n까지 소수의 개수를 반환하는 문제. `에라토스테네스 체` 방식을 이용하여 소수를 판별, 소수일 시 `primeArr`에 추가한 후 length 값을 반환하여 풀었다.
```javascript
const solution = (n) => {
    const isPrime = Array(n + 1).fill(true);
    const primeArr = [];

    for (let i = 2; i < n + 1; i++) {
        if (!isPrime[i]) continue;
        primeArr.push(i);

        for (let j = i + i; j < n + 1; j += i) {
            isPrime[j] = false;
        }
    }
    return primeArr.length;
};

```