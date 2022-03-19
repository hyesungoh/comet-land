---
title: 'BOJ-10995 - Python'
date: 2020-10-25 12:21:13
category: 'Algorithm'
draft: false
---
별 찍기 문제. 열에 따라 ' \*'와 '\* '을 나누어 곱한 값을 출력하여 풀었다.
```python
# n = int(input())
# for i in range(n):
#     print('* '*n if i % 2 == 0 else " *"*n)

n=int(input())
[print('* '*n if i%2==0 else " *"*n) for i in range(n)]

```