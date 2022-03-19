---
title: '프로그래머스-레벨2-소수-찾기 - Javascript'
date: 2021-12-04 12:21:13
category: 'Algorithm'
draft: false
---
"17"과 같은 문자열 정수가 주어진 후 해당 수를 조합하여 나온 수 중에서 소수가 몇 개인지 반환하는 문제. 해당 수를 조합해서 나올 수 있는 수를 계산하기 위해 백트래킹 알고리즘을 이용하였고, 조합해서 나온 수 중 가장 큰 수까지 에라토스테네스의 체 방법을 이용해 소수판별 배열을 만들어 계산하여 풀었다.
```javascript
function solution(numbers) {
  const splitedNumbers = numbers.split("");
  const isVisted = new Array(splitedNumbers.length).fill(false);
  const setNumbers = new Set();
  const currentNumber = [];

  function backTracking(depth) {
    if (currentNumber.length !== 0)
      setNumbers.add(parseInt(currentNumber.join("")));
    if (depth === splitedNumbers.length) return;

    for (let i = 0; i < splitedNumbers.length; i++) {
      if (isVisted[i] === false) {
        currentNumber.push(splitedNumbers[i]);
        isVisted[i] = true;

        backTracking(depth + 1);

        currentNumber.pop();
        isVisted[i] = false;
      }
    }
  }
  backTracking(0);

  const maxNum = Math.max(...setNumbers);
  const isPrime = new Array(maxNum + 1).fill(true);

  function sieve() {
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i < maxNum ** 0.5; i++) {
      if (isPrime[i]) {
        for (let j = i + i; j < maxNum + 1; j += i) {
          isPrime[j] = false;
        }
      }
    }
  }

  sieve();

  let answer = 0;
  setNumbers.forEach((num) => {
    if (isPrime[num] === true) answer += 1;
  });

  return answer;
}

```