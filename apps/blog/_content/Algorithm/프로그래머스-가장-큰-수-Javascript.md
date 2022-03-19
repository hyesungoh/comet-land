---
title: '프로그래머스-가장-큰-수 - Javascript'
date: 2021-11-10 12:21:13
category: 'Algorithm'
draft: false
---
문자열로 변환 후, 더한 값을 기준으로 정렬하여 풀었다.
```javascript
function solution(numbers) {
    const answer = numbers
        .map((n) => n.toString())
        .sort((a, b) => b + a - (a + b))
        .join("");
    return answer[0] === "0" ? "0" : answer;
}

```