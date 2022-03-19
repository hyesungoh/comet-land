---
title: 'BOJ-2206 - Python'
date: 2020-11-14 12:21:13
category: 'Algorithm'
draft: false
---
y, x 크기의 0과 1로 이루어진 행렬을 입력받는다. 0은 이동할 수 있는 곳, 1은 이동할 수 없는 벽일 때, 벽을 한 번만 부술 수 있는 조건을 이용하여 좌표 (0, 0)에서 (y, x)까지 최단 거리를 출력하는 문제. 첫 번째 풀이는 벽을 부셨는 지 판단하는 변수를 이용하여 함수를 재귀적으로 호출하여 풀었으나 메모리 초과 결과를 받게 되었다. 두번째 풀이는 deque를 이용한 bfs를 이용하여 풀었다. 거리 및 방문을 확인하는 2차원 배열을 이용하여 풀었으나 한 번 부신 후 [돌아가는 길이 존재할 때](https://www.acmicpc.net/board/view/44061) 풀어지지 않았다. 이를 해결하기 위해 방문 및 거리를 확인하는 배열을 3차원으로 만든 후 [is_break][y][x]의 형태로 사용, 대입 시 한번 부쉈을 때의 다음 좌표 = 안부쉈을 때의 좌표 + 1의 형태로 작성하여 풀었다.
```python
# 재귀 형식으로 구현 > 메모리 초과 결과
# import sys
# sys.setrecursionlimit(10**9)
# input = sys.stdin.readline
#
# def find(y, x, isBreak):
#     if y == Y-1 and x == X-1:
#         return
#
#     for h, w in direc:
#         ty = y + h
#         tx = x + w
#
#         if 0 <= ty < Y and 0 <= tx < X:
#             if graph[ty][tx] == 0 and dist[ty][tx] > dist[y][x]+1:
#                 dist[ty][tx] = dist[y][x]+1
#                 find(ty, tx, isBreak)
#
#             elif graph[ty][tx] == 1 and isBreak == False and dist[ty][tx] > dist[y][x]+1:
#                 dist[ty][tx] = dist[y][x]+1
#                 isBreak = True
#                 find(ty, tx, isBreak)
#
#
# MS = 1000001
# Y, X = map(int, input().strip().split())
# graph = []
# dist = [[MS for _ in range(X)] for _ in range(Y)]
# dist[0][0] = 1
#
# direc = [[0, 1],
#          [0, -1],
#          [1, 0],
#          [-1, 0]]
#
# for i in range(Y):
#     graph.append(list(map(int, input().strip())))
#
# find(0, 0, False)
#
# print(dist[Y-1][X-1] if dist[Y-1][X-1] != MS else -1)

# deque로 구현

import sys
from collections import deque
input = sys.stdin.readline

def bfs():
    q = deque()
    q.append([0, 0, 0])

    while q:
        y, x, is_break = q.popleft()

        if y == Y-1 and x == X-1:
            return dist[is_break][y][x]

        for h, w in direc:
            ty = y + h
            tx = x + w

            if 0 <= ty < Y and 0 <= tx < X:
                if graph[ty][tx] == 0 and dist[is_break][ty][tx] == 0:
                    dist[is_break][ty][tx] = dist[is_break][y][x]+1
                    q.append([ty, tx, is_break])

                elif graph[ty][tx] == 1 and is_break == 0:
                    dist[1][ty][tx] = dist[0][y][x]+1
                    q.append([ty, tx, 1])
    return -1


Y, X = map(int, input().split())
graph = []
dist = [[[0 for _ in range(X)] for _ in range(Y)] for _ in range(2)]
dist[0][0][0] = 1

direc = [[0, 1],
         [0, -1],
         [1, 0],
         [-1, 0]]

for i in range(Y):
    graph.append(list(map(int, input().strip())))

print(bfs())

```