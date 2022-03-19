---
title: 'BOJ-10026 - Python'
date: 2021-2-19 12:21:13
category: 'Algorithm'
draft: false
---
RGB로 구분되는 n 크기의 이차원 배열을 입력받는다. 그 후 일반인이 느끼는 구역과 적록색약이 느끼는 구역을 출력하는 문제. 입력받는 이차원 배열을 일반인과 색약으로 구분하여 저장하고 각각 방문확인 배열을 만들어 dfs 연산을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

dire = [[1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]]


def dfs(sy, sx, color, tgraph, tvisit):
    q = [[sy, sx]]
    tvisit[sy][sx] = True

    while q:
        y, x = q.pop()
        for ty, tx in dire:
            ny, nx = y + ty, x + tx
            if 0 <= ny < n and 0 <= nx < n:
                if not tvisit[ny][nx] and tgraph[ny][nx] == color:
                    q.append([ny, nx])
                    tvisit[ny][nx] = True

n = int(input())
graph = [[] for _ in range(n)]
colorweekgraph = [[] for _ in range(n)]

for i in range(n):
    t = input()
    graph[i] = list(t)
    colorweekgraph[i] = list(map(lambda x: 'R' if x == 'G' else x, t))

visit = [[False for _ in range(n)] for _ in range(n)]
colorweekvisit = [[False for _ in range(n)] for _ in range(n)]

area, colorweekarea = 0, 0
for y in range(n):
    for x in range(n):
        if not visit[y][x]:
            dfs(y, x, graph[y][x], graph, visit)
            area += 1
        if not colorweekvisit[y][x]:
            dfs(y, x, colorweekgraph[y][x], colorweekgraph, colorweekvisit)
            colorweekarea +=1

print(area, colorweekarea)

```