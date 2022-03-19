---
title: 'BOJ-1520 - Python'
date: 2021-2-11 12:21:13
category: 'Algorithm'
draft: false
---
Y, X 크기의 정수로 이루어진 2차원 배열이 입력된다. 0, 0 위치에서 Y-1, X-1까지 해당 자리의 정수가 낮은 곳으로만 이동할 때, Y-1, X-1에 도착하는 경우의 수가 몇가지인 지 출력하는 문제. 첫 번째 풀이는 단순 다이내믹 프로그래밍 방법을 이용하여 풀었으나 먼저 계산된 곳이 있을 시 연산이 안되는 부분이 있어 각 방향마다 연산을 더 하도록 하지 않는 이상 안될 것 같아 방향을 틀었다. 두 번째 풀이는 -1로 선언된 배열을 만든 후 해당 배열을 이용하여 방문확인과 함께 이동방향의 값을 더하는 것을 재귀적으로 연산하여 풀었다.
```python
# dire = [[1, 0],
#         [-1, 0],
#         [0, 1],
#         [0, -1]]
#
# Y, X = map(int, input().split())
# graph = [[] for _ in range(Y)]
# for i in range(Y): graph[i] = list(map(int, input().split()))
# dp = [[0 for _ in range(X)] for _ in range(Y)]
# dp[0][0] = 1
#
# for y in range(Y):
#     for x in range(X):
#         for ty, tx in dire:
#             ny = y + ty
#             nx = x + tx
#             if 0 <= ny < Y and 0 <= nx < X:
#                 if graph[ny][nx] < graph[y][x]:
#                     dp[ny][nx] += dp[y][x]
#                     print(y, x)
#
# for i in dp:
#     print(i)

import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def dfs(y, x):
    if Y-1 == y and X-1 == x:
        return 1

    if dp[y][x] == -1:
        dp[y][x] = 0
        for ty, tx in dire:
            ny, nx = y + ty, x + tx
            if 0 <= ny < Y and 0 <= nx < X:
                if graph[y][x] > graph[ny][nx]:
                    dp[y][x] += dfs(ny, nx)
    return dp[y][x]

dire = [[1, 0], [-1, 0], [0, 1], [0, -1]]
Y, X = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(Y)]
dp = [[-1 for _ in range(X)] for _ in range(Y)]

dfs(0, 0)
print(dp[0][0])

```