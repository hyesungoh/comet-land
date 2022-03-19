---
title: 'BOJ-2178 - Python'
date: 2020-09-05 12:21:13
category: 'Algorithm'
draft: false
---
미로의 크기 n, m이 주어진 후 1과 0으로 이루어진 미로가 입력된다 1은 이동할 수 있는 곳, 0은 이동할 수 없는 곳이라고 하였을 때, (0, 0)에서 출발하여 (n-1, m-1)까지 걸리는 최단 거리를 계산하는 문제. 방문했는지 확인, 거리를 저장할 2차원 배열을 만들었으며, 상하좌우 방문 확인 배열의 값이 False인지, 그래프의 값이 1인지를 확인한 후 deque에 append하여 풀었다.
```python
from collections import deque
n, m = map(int, input().split())
graph = [list(map(int, list(input()))) for _ in range(n)]
check = [[False]*m for _ in range(n)]
dist = [[0]*m for _ in range(n)]

que = deque()

que.append((0, 0))
dist[0][0] = 1
check[0][0] = True

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

while que:
    i, j = que.popleft()
    for temp in range(4):
        x = dx[temp] + i
        y = dy[temp] + j
        if 0 <= x < n and 0 <= y < m:
            if check[x][y] is False and graph[x][y] == 1:
                que.append((x, y))
                dist[x][y] = dist[i][j] + 1
                check[x][y] = True
print(dist[n-1][m-1])

```