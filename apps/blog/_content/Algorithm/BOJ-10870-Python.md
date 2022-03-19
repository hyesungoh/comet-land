---
title: 'BOJ-10870 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
n번째 피보나치 수열의 수를 출력하는 문제. 재귀를 이용하여 풀었다.
```python
def f(n):
    return n if n <= 1 else f(n-1) + f(n-2)
print(f(int(input())))

```