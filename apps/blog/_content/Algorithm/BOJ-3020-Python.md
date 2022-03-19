---
title: 'BOJ-3020 - Python'
date: 2020-11-3 12:21:13
category: 'Algorithm'
draft: false
---
석순과 종유석이 번갈아 있는 길이가 n, 높이가 h인 터널이 있다. 이때 1~h 높이의 구간으로 지나갈 때 만나는 석순 혹은 종유석의 개수 중 최소와 동일한 개수를 갖는 구간의 수를 출력하는 문제. 첫풀이는 석순 혹은 종유석의 길이를 입력할 때 마다 이차원배열의 [길이][높이]에 [길이-1][높이]의 값을 이용하여 연산하여 풀었으나 메모리 초과 결과를 받게 되었다. 두번째 풀이는 누적합을 이용한 연산으로 높이의 종유석, 석순의 개수를 누적합으로 계산 후 각 높이마다 석수 + 종유석의 값을 계산하여 풀었다.
```python
# 3020
# import sys
# input = sys.stdin.readline
#
# n, h = map(int, input().split())
# dist = [[0 for _ in range(h)] for _ in range(n+1)]
#
# for i in range(1, n+1):
#     t = int(input())
#
#     if i % 2 == 1:
#         for j in range(h):
#             dist[i][j] = dist[i-1][j] + 1 if j < t else dist[i - 1][j]
#     else:
#         for j in range(h):
#             dist[i][j] = dist[i-1][j] + 1 if j >= t-1 else dist[i - 1][j]
#
# m = min(dist[-1])
# print(m, dist[-1].count(m))

import sys
input = sys.stdin.readline

n, h = map(int, input().split())
btm = [0 for _ in range(h+1)]
high = [0 for _ in range(h+1)]
dist = [0 for _ in range(h+1)]

for i in range(n):
    if i % 2 == 0:
        btm[int(input())] += 1
    else:
        high[int(input())] += 1

for i in range(h-1, 0, -1):
    btm[i] = btm[i+1] + btm[i]
    high[i] = high[i+1] + high[i]

for i in range(1, h+1):
    dist[i] = btm[i]+high[h-i+1]

dist = dist[1:]
m = min(dist[1:])
print(m, dist.count(m))

```