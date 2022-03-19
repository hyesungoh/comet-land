---
title: '프로그래머스-문자열-다루기-기본 - Javascript'
date: 2021-9-7 12:21:13
category: 'Algorithm'
draft: false
---
숫자 혹은 문자로 이루어진 문자열이 주어진다. 이 수가 길이가 4 혹은 6이며 숫자로만 이루졌을 때 true를, 아닐 시 false를 반환하는 문제. 첫 풀이는 `isNan`을 활용하여 풀었으나 프로그래머스 상에서는 통과하지만 로컬에서 테스트했을 때는 지수인 경우에 통과하지 못했다. 두 번째 풀이는 `==` 연산자를 이용하여 풀었다.
```javascript
// const solution = (s) => {
//     if (s.length !== 4 && s.length !== 6) return false;
//     for (let w of s.split("")) if (isNaN(w)) return false;
//     return true;
// };

const solution = (s) => {
    if (s.length !== 4 && s.length !== 6) return false;
    if (s == parseInt(s)) return true;
    return false;
}
```