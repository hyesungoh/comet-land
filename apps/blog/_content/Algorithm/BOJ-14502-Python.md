---
title: 'BOJ-14502 - Python'
date: 2021-2-8 12:21:13
category: 'Algorithm'
draft: false
---
Y, X 크기의 연구실에 바이러스가 퍼졌다. 바이러스는 상하좌우로 퍼질 수 있으며 벽을 넘지 못한다. 3개의 벽을 세울 수 있을 때 바이러스가 퍼질 수 없는 영역의 최대 크기를 출력하는 문제. 바이러스는 2, 벽은 1, 빈 공간은 0으로 입력된다. 백트래킹 방식을 이용하여 재귀적으로 모든 경우에 벽을 세운 후 세운 벽이 3개가 될 시 바이러스가 퍼지는 함수를 이용하여 새로운 배열에 바이러스가 퍼진 상태로 만든다. 해당 배열을 기준으로 안전영역의 크기를 global로 값을 비교하여 풀었다. 브루트포스, 그래프 탐색, 백트래킹이 합쳐진 형태로 풀었다.
```python
import sys
input = sys.stdin.readline

dist = [[0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]]

def count_safezone(graph):
    global ans
    cnt = 0
    for y in range(Y):
        for x in range(X):
            if graph[y][x] == 0:
                cnt += 1
    ans = max(ans, cnt)

def infection(graph):
    temp_graph = [[0 for _ in range(X)] for _ in range(Y)]
    q = []

    for y in range(Y):
        for x in range(X):
            temp_graph[y][x] = graph[y][x]
            if temp_graph[y][x] == 2:
                q.append([y, x])

    while q:
        y, x = q.pop()
        for dy, dx in dist:
            ny = y + dy
            nx = x + dx

            if 0 <= ny < Y and 0 <= nx < X:
                if temp_graph[ny][nx] == 0:
                    temp_graph[ny][nx] = 2
                    q.append([ny, nx])
    count_safezone(temp_graph)

def create_wall(depth):
    if depth == 3:
        infection(graph)
        return

    for y in range(Y):
        for x in range(X):
            if graph[y][x] == 0:
                graph[y][x] = 1
                create_wall(depth+1)
                graph[y][x] = 0


Y, X = map(int, input().split())
graph = [[] for _ in range(Y)]
for i in range(Y):
    graph[i] = list(map(int, input().split()))
ans = 0
create_wall(0)

print(ans)

```