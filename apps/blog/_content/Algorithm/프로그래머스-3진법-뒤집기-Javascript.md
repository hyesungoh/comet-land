---
title: '프로그래머스-3진법-뒤집기 - Javascript'
date: 2021-9-9 12:21:13
category: 'Algorithm'
draft: false
---
정수를 입력받은 후, 3진수로 바꾸고 뒤집은 다음, 다시 10진수 정수로 반환하는 문제. `n.toString(3)`을 이용하여 3진법으로 변환, `Number.parseInt(3진수, 3)`의 문법을 이용하여 풀었다.
```javascript
const solution = (n) =>
    Number.parseInt(n.toString(3).split("").reverse().join(""), 3);

```