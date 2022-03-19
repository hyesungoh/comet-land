---
title: '프로그래머스-짝수와-홀수 - Javascript'
date: 2021-8-17 12:21:13
category: 'Algorithm'
draft: false
---
정수를 입력받은 후, 해당 정수가 짝, 홀수인지 반환하는 문제. 화살표 함수로 바꾼 후, 삼항 연산자와 0이 false인 것을 이용하여 간단히 풀었다.
```javascript
const solution = (n) => n % 2 ? "Odd" : "Even";
```