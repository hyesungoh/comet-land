---
title: 'BOJ-11048 - Python'
date: 2020-12-29 12:21:13
category: 'Algorithm'
draft: false
---
y, x 크기의 정수로 이루어진 이차원 배열이 주어진다. (0, 0)에서 (y, x)까지 대각선 아래, 오른쪽, 아래쪽 방향으로 이동할 수 있을 때 (y, x)까지 모든 정수를 더한 최대 값을 출력하는 문제. 첫번째 풀이는 bfs 연산을 이용하여 풀었으나 시간초과 결과를 받게 되었다. 두번째 풀이는 dp로 풀었으며, y+1, x+1 크기의 배열을 만들어 `graph[i-1][j-1] + max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`의 점화식을 이용하여 풀었다.
```python
# import sys
# from collections import deque
# input = sys.stdin.readline
#
# dire = [[1, 0],
#         [0, 1]]
#
# def bfs():
#     q = deque()
#     q.append([0, 0, graph[0][0]])
#
#     while q:
#         y, x, cnt = q.popleft()
#
#         for dy, dx in dire:
#             ny = dy + y
#             nx = dx + x
#             if 0 <= ny < Y and 0 <= nx < X:
#                 nv = cnt + graph[ny][nx]
#                 if ans[ny][nx] < nv:
#                     ans[ny][nx] = nv
#                     q.append([ny, nx, nv])
#
#
# Y, X = map(int, input().split())
# ans = [[0 for _ in range(X)] for _ in range(Y)]
#
# graph = []
# for _ in range(Y):
#     graph.append(list(map(int, input().split())))
#
# bfs()
# print(ans[Y-1][X-1])

import sys
input = sys.stdin.readline
y, x = map(int, input().split())
graph = []
[graph.append(list(map(int, input().split()))) for _ in range(y)]
dp = [[0 for _ in range(x+1)] for _ in range(y+1)]

for i in range(1, y+1):
    for j in range(1, x+1):
        dp[i][j] = graph[i-1][j-1] + max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

print(dp[y][x])

```