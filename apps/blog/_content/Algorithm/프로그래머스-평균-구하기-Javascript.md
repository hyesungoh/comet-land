---
title: '프로그래머스-평균-구하기 - Javascript'
date: 2021-8-18 12:21:13
category: 'Algorithm'
draft: false
---
reduce를 이용하여 sum 값을 구한 후, length를 이용하여 평균을 구한 후 반환하여 풀었다.
```javascript
const solution = (arr) => arr.reduce((a, c) => a + c) / arr.length;

```