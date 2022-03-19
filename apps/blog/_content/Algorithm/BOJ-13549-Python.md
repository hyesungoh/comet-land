---
title: 'BOJ-13549 - Python'
date: 2020-10-23 12:21:13
category: 'Algorithm'
draft: false
---
[BOJ 1697](../master/python/BOJ_1697.py)의 변형 문제. 기존 좌표 x\*2에는 1초가 추가됐으나 이번 문제에서는 초가 추가되지 않는다. 문제에서 n이 k의 좌표까지 가는 가장 빠른 시간을 요구하기 때문에 queue에 추가할 때 왼쪽에 추가하여 우선도를 높여 풀었다.
```python
from collections import deque

n, k = map(int, input().split())
q = deque([[n, 0]])
visit = [False] * 100001

while q:
    loca, sec = q.popleft()
    if loca == k:
        print(sec)
        exit(0)

    if not visit[loca]:
        visit[loca] = True
        t = [loca*2, loca+1, loca-1]

        if 0 <= t[0] <= 100000:
            q.appendleft([loca*2, sec])
        if 0 <= t[1] <= 100000:
            q.append([loca+1, sec+1])
        if 0 <= t[2] <= 100000:
            q.append([loca-1, sec+1])

# from collections import deque
#
# def f(n, k):
#     q = deque([[n, 0]])
#     while q:
#         loca, sec = q.popleft()
#         if loca == k:
#             return sec
#         for i in [loca*2, loca+1, loca-1]:
#             if 0 <= i <= 100000 and not visit[i]:
#                 if i == loca*2 and i != 0:
#                     q.appendleft([i, sec])
#                 else:
#                     q.append([i, sec+1])
#
# n, k = map(int, input().split())
# visit = [False] * 100001
# print(f(n, k))

```