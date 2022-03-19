---
title: 'BOJ-3055 - Python'
date: 2021-3-5 12:21:13
category: 'Algorithm'
draft: false
---
S, D, "\*", ".", X로 이루어진 y, x 크기의 그래프가 주어진다. S와 D는 출발점과 도착점이고 "."은 빈 공간, X는 벽, "\*"은 물이다. 물은 1초마다 상하좌우로 퍼지며 물이 퍼진 곳과 곧 퍼질 곳 (같은 초)에는 이동할 수 없다. S에서 D까지 가장 빨리 도착했을 때의 시간을 출력하는 문제. 그래프와 같은 크기의 물이 퍼지는 시간을 저장하며 기본 값을 XY값인 배열을 만들어 사용하였다. dfs 연산을 통해 물의 최단 이동시간을 저장하였다. 동일한 조건의 배열과 동일한 조건에 물이 퍼지는 시간보다 작을 때의 조건을 추가하여 S에서 이동하는 거리를 dfs 연산을 통해 저장하였다. 그 후 S에서 이동한 거리 중 D의 값이 XY일 때는 도착할 수 없음을, 아닐 시 해당 값을 출력하여 풀었다.
```python
import sys
from collections import deque
input = sys.stdin.readline

dire = [[1, 0], [-1, 0], [0, 1], [0, -1]]

def water_move(wdist):
    while water:
        y, x = water.popleft()
        now_value = wdist[y][x]

        for ty, tx in dire:
            ny, nx = y + ty, x + tx
            if 0 <= ny < Y and 0 <= nx < X:
                if wdist[ny][nx] > now_value + 1 and graph[ny][nx] == ".":
                    wdist[ny][nx] = now_value + 1
                    water.append([ny, nx])

def dochi_move(dist):
    while dochi:
        y, x = dochi.popleft()
        now_value = dist[y][x]

        for ty, tx in dire:
            ny, nx = y + ty, x + tx
            if 0 <= ny < Y and 0 <= nx < X:
                if wdist[ny][nx] > now_value + 1and (graph[ny][nx] == "." or graph[ny][nx] == "D"):
                    if dist[ny][nx] > now_value + 1:
                        dist[ny][nx] = now_value + 1
                        dochi.append([ny, nx])

Y, X = map(int, input().split())
graph = [list(input()) for _ in range(Y)]

wdist = [[X*Y for _ in range(X)] for _ in range(Y)]
dist = [[X*Y for _ in range(X)] for _ in range(Y)]
water = deque()
dochi = deque()

for y in range(Y):
    for x in range(X):
        if graph[y][x] == '*':
            water.append([y, x])
            wdist[y][x] = 0
        elif graph[y][x] == 'S':
            dochi.append([y, x])
            dist[y][x] = 0
        elif graph[y][x] == 'D':
            endY, endX = y, x

water_move(wdist)
dochi_move(dist)

print("KAKTUS" if dist[endY][endX] == Y * X else dist[endY][endX])

```