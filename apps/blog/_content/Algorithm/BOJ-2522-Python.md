---
title: 'BOJ-2522 - Python'
date: 2020-10-21 12:21:13
category: 'Algorithm'
draft: false
---
별찍기 문제. 3이 입력됐을 때 공백2개 별 1개, 공백 1개 별 2개, 별 3개, 그리고 다시 공백 2개 별 1개까지 찍으면 되는 문제. -n부터 n까지 반복문을 작성하고 절댓값을 사용하여 풀었다.
```python
n = int(input())
for i in range(-n+1, n):
    print(" " * abs(i), end='')
    print("*" * (n-abs(i)))

```