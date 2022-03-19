---
title: '프로그래머스-자릿수-더하기 - Javascript'
date: 2021-8-16 12:21:13
category: 'Algorithm'
draft: false
---
정수를 입력받은 후, 해당 정수의 자릿수를 모두 더해 반환하는 문제. 정수를 문자열, 배열화한 후 reduce를 이용하여 모든 자릿수를 더하여 풀었다.
```javascript
function solution(n) {
    const nArr = Array.from(n.toString());
    const answer = nArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
}

```