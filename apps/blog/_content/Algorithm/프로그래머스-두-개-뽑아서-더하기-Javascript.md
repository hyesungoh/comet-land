---
title: '프로그래머스-두-개-뽑아서-더하기 - Javascript'
date: 2021-12-13 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 배열에서 두 개를 뽑아서 더했을 때 나올 수 있는 수를 정렬하여 반환하는 문제. 중복 제거를 위해 Set 자료형을 이용하여 풀었다.
```javascript
function solution(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((n1, n2) => n1 - n2);
}

```