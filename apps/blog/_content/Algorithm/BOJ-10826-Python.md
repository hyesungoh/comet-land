---
title: 'BOJ-10826 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
n번째 피보나치 수열의 수를 출력하는 문제. 위 문제와 다르게 큰 수가 입력되어 재귀를 이용해서 풀었을 때 시간초과 결과를 받게된다. 단순 반복문을 이용하여 풀었다.
```python
def f(n):
    x, y = 0, 1
    for i in range(n):
        x, y = y, x + y
    return x
print(f(int(input())))

```