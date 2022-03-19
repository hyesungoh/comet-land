---
title: '프로그래머스-위장 - Javascript'
date: 2022-1-15 12:21:13
category: 'Algorithm'
draft: false
---
[옷 이름, 옷 카테고리]로 이루어진 배열이 주어지며 최소한 한 개의 옷을 입어야할 때 입을 수 있는 다른 옷의 조합의 수를 반환하는 문제. Object를 이용해 해당 카테고리에 존재하는 수를 계산한 후 약수의 수를 계산하여 풀었다.
```javascript
function solution(clothes) {
  const graph = {};
  for (let cloth of clothes) {
    const [_, category] = cloth;
    if (category in graph) graph[category] += 1;
    else graph[category] = 1;
  }

  let answer = 1;
  for (let key in graph) {
    answer *= graph[key] + 1;
  }
  return answer - 1;
}

```