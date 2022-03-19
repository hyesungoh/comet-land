---
title: '프로그래머스-제일-작은-수-제거하기 - Javascript'
date: 2021-8-25 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 배열이 주어진 후, 해당 배열에서 제일 작은 수를 제거한 배열을 반환하는 문제. 이 때 제거된 배열의 길이가 0일 시 -1로 이루어진 배열을 반환하는 조건이 있다. filter, Math.min 메소드를 이용하여 풀었다.
```javascript
function solution(arr) {
    const answer = arr.filter(num => num !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer
}
```