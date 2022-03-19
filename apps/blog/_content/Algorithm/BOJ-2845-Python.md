---
title: 'BOJ-2845 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
두 수 n, m을 입력 받은 후 곱한 값에 다음 줄에 입력되는 5가지 수와 비교한 값을 출력하는 문제. input.split한 값을 기준으로 for문을 수행하여 풀었다.
```python
n, m = map(int, input().split())
s = n*m
for i in input().split():
    print(int(i) - s, end=" ")

```