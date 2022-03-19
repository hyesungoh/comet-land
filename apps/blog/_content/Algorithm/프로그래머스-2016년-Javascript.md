---
title: '프로그래머스-2016년 - Javascript'
date: 2021-9-6 12:21:13
category: 'Algorithm'
draft: false
---
월, 일이 주어졌을 때 2016년의 해당 날짜는 무슨 요일인지 반환하는 문제. 요일과 각 월별 일수를 이용하여 진행된 일수를 이용해 풀었다.
```javascript
const solution = (m, d) => {
    const words = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const curDay = days.filter((_, idx) => idx < m).reduce((a, c) => a + c) + d - 1;
    return words[curDay % 7];
};

```