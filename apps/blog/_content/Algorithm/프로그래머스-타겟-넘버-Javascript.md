---
title: '프로그래머스-타겟-넘버 - Javascript'
date: 2021-11-14 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 배열과 한 개의 정수가 주어질 때, 배열에 구성된 숫자들은 더하기 혹은 빼기로 모두 조합하였을 때 주어진 한 개의 정수가 되는 경우의 수를 반환하는 문제. 재귀적으로 탐색, 탐색이 종료됐을 시 조건에 부합하면 증감하여 풀었다.
```javascript
function solution(numbers, target) {
  let ans = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) ans += 1;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);
  return ans;
}

```