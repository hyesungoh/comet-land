---
title: 'BOJ-1261 - Python'
date: 2020-12-16 12:21:13
category: 'Algorithm'
draft: false
---
(0, 0)부터 (y, x) 좌표까지 이동할 때 막힌 곳을 부신 후 지나갈 수 있다고 한다. 이 때 최소한의 개수로 부수며 갈 수 있는 경우의 부순 수를 출력하는 문제. 다익스트라 알고리즘을 사용하여 풀었으며, 이에 필요한 힙 자료구조, 방문확인 배열을 이용하여 풀었다.
```python
import sys
import heapq
input = sys.stdin.readline
direc = [[1, 0],
         [-1, 0],
         [0, 1],
         [0, -1]]

def dijkstra():
    visit = [[0 for _ in range(X)] for _ in range(Y)]
    visit[0][0] = 1

    q = []
    heapq.heappush(q, [0, 0, 0])

    while q:
        cnt, y, x = heapq.heappop(q)

        if y == Y-1 and x == X-1:
            return cnt

        for dy, dx in direc:
            ny = dy + y
            nx = dx + x
            if 0 <= ny < Y and 0 <= nx < X and visit[ny][nx] == 0:
                visit[ny][nx] = 1
                if graph[ny][nx] == '1':
                    heapq.heappush(q, [cnt+1, ny, nx])
                else:
                    heapq.heappush(q, [cnt, ny, nx])

X, Y = map(int, input().split())
graph = []
for _ in range(Y):
    graph.append(list(input()))
ans = dijkstra()
print(ans)

```