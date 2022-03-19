---
title: '프로그래머스-멀쩡한-사각형 - Javascript'
date: 2021-12-03 12:21:13
category: 'Algorithm'
draft: false
---
w, h의 가로 세로길이의 직사각형이 있을 때 대각선으로 자른 후, 멀쩡한 사각형의 개수를 반환하는 문제. 대각선으로 그었을 때 잘라지는 사각형의 수를 구하는 공식인 `w + h - gcd(w, h)`를 이용하여 풀었다.
```javascript
function gcd(n, m) {
    return n % m === 0 ? m : gcd(m, n % m);
  }
  
  function solution(w, h) {
    return w * h - (w + h - gcd(w, h));
  }
  
```