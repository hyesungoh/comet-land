---
title: 'BOJ-17256 - Python'
date: 2020-08-19 12:21:13
category: 'Algorithm'
draft: false
---
숫자 세개로 이루어진 두 개의 문자열을 각각 a,b,c / x,y,z라고 할 때 x-c, y//b, z-a라는 수식을 도출해 출력하는 문제
```python
a, b, c = map(int, input().split())
x, y, z = map(int, input().split())
print(x-c, y//b, z-a)

```