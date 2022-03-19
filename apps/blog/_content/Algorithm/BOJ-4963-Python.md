---
title: 'BOJ-4963 - Python'
date: 2020-11-20 12:21:13
category: 'Algorithm'
draft: false
---
x, y 크기의 0과 1로 이루어진 그래프를 입력 받는다. 1은 상하좌우와 대각선으로 근접해있을 시 같은 '섬'이라 판단할 때 섬의 수를 출력하는 문제. y, x 크기의 2차원배열을 만들어 방문 확인을 하며 2중 반복문을 수행하며 그래프의 값이 1이며 방문한 적이 없을 때 dfs 연산을 이용해 방문 확인을 한 후 섬의 수를 저장하는 변수의 값을 추가해 풀었다.
```python
import sys
input = sys.stdin.readline

dire = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
]

def dfs(hy, hx):
    global land

    visit[hy][hx] = True
    q = [[hy, hx]]

    while q:
        ty, tx = q.pop()
        for ny, nx in dire:
            next_y, next_x = ty+ny, tx+nx
            if 0 <= next_y < y and 0 <= next_x < x:
                if visit[next_y][next_x] == False and graph[next_y][next_x] == 1:
                    visit[next_y][next_x] = True
                    graph[next_y][next_x] = land
                    q.append([next_y, next_x])


while True:
    x, y = map(int, input().split())
    if x == 0:
        break

    graph = []
    for _ in range(y):
        graph.append(list(map(int, input().split())))

    visit = [[False for _ in range(x)] for _ in range(y)]
    land = 0

    for ty in range(y):
        for tx in range(x):
            if visit[ty][tx] == False and graph[ty][tx] == 1:
                dfs(ty, tx)
                land += 1
    print(land)

```