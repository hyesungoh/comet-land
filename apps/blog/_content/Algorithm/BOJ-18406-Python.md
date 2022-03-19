---
title: 'BOJ-18406 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
짝수의 수가 입력되고 좌우 절반으로 나누었을 때, 각 수들을 합친 값을 비교하여 출력하는 문제. 문자열을 len을 이용하여 슬라이싱한 값을 map을 이용하여 형변환, sum을 이용하여 합친 값을 삼항연산자를 이용하여 비교, 출력하였다.
```python
s = input()
l = len(s)//2
print('LUCKY' if sum(map(int, s[0:l])) == sum(map(int, s[l:])) else 'READY')

```