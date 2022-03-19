---
title: '프로그래머스-서울에서-김서방-찾기 - Javascript'
date: 2021-8-29 12:21:13
category: 'Algorithm'
draft: false
---
배열에서의 "Kim"의 인덱스 값을 이용한 문자열을 반환하는 문제. indexOf를 활용하여 풀었다.
```javascript
const solution = (seoul) => `김서방은 ${seoul.indexOf("Kim")}에 있다`;
```