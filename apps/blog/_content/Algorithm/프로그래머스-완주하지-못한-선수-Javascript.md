---
title: '프로그래머스-완주하지-못한-선수 - Javascript'
date: 2022-2-15 12:21:13
category: 'Algorithm'
draft: false
---
참가 선수 배열과 완주한 선수 배열이 주어졌을 때 완주하지 못한 선수 문자열을 반환하는 문제. 첫 번째 풀이는 한 사람만이 완주하지 못한 조건을 이용해 정렬하여 같은 인덱스 값으로 비교하였을 때 다른 것을 정답으로써 풀었으나 파이썬과는 달리 효율성 테스트에서 통과하지 못하였다. 다음 풀이는 오브젝트를 이용해 완주하지 못한 선수를 확인하여 풀었다.
```javascript
// function solution(participant, completion) {
//   for (let i = 0; i < participant.length; i++) {
//     participant.sort();
//     completion.sort();
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// }

function solution(participant, completion) {
  const completionObj = {};

  for (let comp of completion) {
    if (completionObj[comp]) {
      completionObj[comp] += 1;
    } else {
      completionObj[comp] = 1;
    }
  }

  for (let participantPerson of participant) {
    if (
      typeof completionObj[participantPerson] === "undefined" ||
      completionObj[participantPerson] === 0
    )
      return participantPerson;

    completionObj[participantPerson] -= 1;
  }
}

```