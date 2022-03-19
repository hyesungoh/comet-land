---
title: 'BOJ-19622 - Python'
date: 2021-1-30 12:21:13
category: 'Algorithm'
draft: false
---
n개의 회의 시작 시간, 종료 시간, 회의 인원이 주어진다. 임의의 회의 k는 k-1과 k+1과 시간이 겹치며 다른 회의와는 겹치지 않는 조건이 있다. 이 조건을 이용하여 점화식 l[i] = max(l[i-2], l[l-3]) + l[i]을 유추하여 풀었다. n이 2 이하일 때 max(l)을 출력 후 프로그램을 종료하여 예외처리하였다.
```python
import sys
input = sys.stdin.readline

n = int(input())
l = [0 for _ in range(n)]
for i in range(n):
    s, e, w = map(int, input().split())
    l[i] = w

if n <= 2:
    print(max(l))
    exit(0)

l[2] += l[0]
for i in range(3, n):
    l[i] = max(l[i-2], l[i-3]) + l[i]

print(max(l))

```