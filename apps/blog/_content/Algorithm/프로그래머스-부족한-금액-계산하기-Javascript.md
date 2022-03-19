---
title: '프로그래머스-부족한-금액-계산하기 - Javascript'
date: 2021-8-26 12:21:13
category: 'Algorithm'
draft: false
---
놀이기구의 가격, 보유한 금액, 계산이 될 횟수가 주어지고 가격은 횟수만큼 올라갈 때, 놀이기구를 몇 번 탑승할 수 있는지 계산하는 문제. 사칙연산과 조건문을 이용하여 풀었다.
```javascript
const solution = (price, money, count) => {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    return sum < money ? 0 : sum - money;
};

```