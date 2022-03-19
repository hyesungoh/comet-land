---
title: 'BOJ-7569 - Python'
date: 2020-09-17 12:21:13
category: 'Algorithm'
draft: false
---
7576번 문제가 2차원 배열의 토마토 상자였으면, 이번 문제는 3차원 배열의 토마토 상자인 문제이다. 7576번 문제의 풀이와 다르게 visit 배열을 만들지 않고 풀었으며 dx, dy, dz 배열에 6개 요소를 넣어 6번 반복을 하여 날짜를 계산하는 dist 배열에 값을 넣어 3중 반복문을 통해 비교하여 출력하여 풀었다.
```python
# from collections import deque
# import sys
# input = sys.stdin.readline
# q = deque()
#
# n, m, h = map(int, input().split())
# graph = [[list(map(int, sys.stdin.readline().split())) for _ in range(n)] for _ in range(h)]
# dist = [[[0] * n for _ in range(m)] for _ in range(h)]
# isnone = True
#
# for z in range(h):
#     for y in range(m):
#         for x in range(n):
#             if graph[z][y][x] == 1:
#                 q.append((z, y, x))
#                 isnone = False
#
# if isnone:
#     print(-1)
#     sys.exit(0)
#
# dx = [1, -1, 0, 0, 0, 0]
# dy = [0, 0, 1, -1, 0, 0]
# dz = [0, 0, 0, 0, 1, -1]
# while q:
#     a, b, c = q.popleft()
#
#     for i in range(6):
#         x = c + dx[i]
#         y = b + dy[i]
#         z = a + dz[i]
#         if 0 <= x < n and 0 <= y < m and 0 <= z < h:
#             if graph[z][y][x] == 0:
#                 q.append((z, y, x))
#                 graph[z][y][x] = 1
#                 dist[z][y][x] = dist[a][b][c] + 1
#
# day = 0
# for z in range(h):
#     for y in range(m):
#         for x in range(n):
#             if dist[z][y][x] > day:
#                 day = dist[z][y][x]
#
#             elif graph[z][y][x] == 0:
#                 print(-1)
#                 sys.exit(0)
#
# print(day)

from collections import deque
import sys
input = sys.stdin.readline
q = deque()

n, m, h = map(int, input().split())
graph = [[list(map(int, sys.stdin.readline().split())) for _ in range(m)] for _ in range(h)]
dist = [[[0] * n for _ in range(m)] for _ in range(h)]
isnone = True

for z in range(h):
    for y in range(m):
        for x in range(n):
            if graph[z][y][x] == 1:
                q.append((z, y, x))
                isnone = False

if isnone:
    print(-1)
    sys.exit(0)

dx = [1, -1, 0, 0, 0, 0]
dy = [0, 0, 1, -1, 0, 0]
dz = [0, 0, 0, 0, 1, -1]
while q:
    a, b, c = q.popleft()

    for i in range(6):
        x = c + dx[i]
        y = b + dy[i]
        z = a + dz[i]
        if 0 <= x < n and 0 <= y < m and 0 <= z < h:
            if graph[z][y][x] == 0:
                q.append((z, y, x))
                graph[z][y][x] = 1
                dist[z][y][x] = dist[a][b][c] + 1

day = 0
for z in range(h):
    for y in range(m):
        for x in range(n):
            if dist[z][y][x] > day:
                day = dist[z][y][x]

            elif graph[z][y][x] == 0:
                print(-1)
                sys.exit(0)

print(day)

```