---
title: '프로그래머스-나누어-떨어지는-숫자-배열 - Javascript'
date: 2021-8-22 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 배열과, 정수가 주어진다. 해당 배열에서 주어진 정수로 나누어떨어지는 수들을 오름차순 정렬하여 반환하는 문제.filter 메소드를 이용하여 나누어 떨어진 수로 이루어진 배열을 생성 후, 해당 배열의 크기를 기준으로 정렬한 배열, -1만 존재한 배열을 나누어 반환하여 풀었다.
```javascript
function solution(arr, divisor) {
    const answer = arr.filter((n) => n % divisor === 0);
    console.log(answer.length);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
```