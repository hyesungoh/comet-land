---
title: '프로그래머스-가운데-글자-가져오기 - Javascript'
date: 2021-8-31 12:21:13
category: 'Algorithm'
draft: false
---
문자열이 주어진 후, 해당 문자열의 길이가 짝수이면 가운데 2글자를, 홀수이면 가운데 글자를 반환하는 문제. length를 기준으로 slice하여 풀었다.
```javascript
const solution = (s) => {
    const { length } = s;
    const half = length / 2;
    return length % 2 === 0
        ? s.slice(half - 1, half + 1)
        : s.slice(half, half + 1);
};

```