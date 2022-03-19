---
title: '프로그래머스-구명보트 - Javascript'
date: 2022-1-18 12:21:13
category: 'Algorithm'
draft: false
---
사람들의 몸무게와 구명보트에 탈 수 있는 제한 무게가 주어진 후 최대 두명이서 탈 수 있을 때 최소한의 구명보트 수를 구하는 문제. 첫 번째 접근은 최대 두명인 조건을 읽지 못해 무게 제한만을 고려하여 풀었으나, 이내 확인하고 정렬하여 최대 무게와 최소 무게의 사람을 비교하여 탈 수 있을 때 다음 사람으로 이동, 탈 수 없을 때 최대 무게인 사람만 수정하여 풀었다.
```javascript
function solution(people, limit) {
    let answer = 0;
  
    people.sort((a, b) => a - b);
    let start = 0;
    let end = people.length - 1;
  
    while (start <= end) {
      ++answer;
      if (people[start] + people[end] <= limit) ++start;
      --end;
    }
  
    return answer;
  }
  
```