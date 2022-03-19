---
title: '프로그래머스-직사각형-별찍기 - Javascript'
date: 2021-8-21 12:21:13
category: 'Algorithm'
draft: false
---
두 개의 수가 주어지고 해당 수를 이용하여 직사각형을 출력하는 문제, 문자열의 repeat 메소드를 이용하여 풀었다.
```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const [x, y] = data.split(" ");
    console.log(`${"*".repeat(x)}\n`.repeat(y));
});

```