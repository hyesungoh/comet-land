---
title: '프로그래머스-문자열-내림차순으로-배치하기 - Javascript'
date: 2021-8-23 12:21:13
category: 'Algorithm'
draft: false
---
문자열이 주어진 후, 내림차 순으로 정렬된 문자열을 반환하는 문제. split, sort, reverse, join 메소드를 이용하여 풀었다.
```javascript
const solution = (s) => s.split("").sort().reverse().join("");

```