---
title: 'BOJ-2665 - Python'
date: 2021-1-20 12:21:13
category: 'Algorithm'
draft: false
---
0과 1로 이루어진 n, n 크기의 2차원 배열을 입력받는다. 0, 0부터 n, n까지 상하좌우로 이동할 때 0은 이동하지 못하는 곳이라고 한다. 이 때 0을 1로 바꾸어 이동할 수 있는데, 0을 1로 바꾸는 동작을 최소화하여 n, n까지 도착했을 때 해당 값을 출력하는 문제. 힙 자료구조, INF를 사용하는 다익스트라 방법을 이용하여 풀었다. 저장된 값이 현재 값보다 클 때 힙에 넣도록 하였으며 0과 1을 판단하여 cnt의 크기를 연산하여 풀었다.
```python
import sys
import heapq
INF = sys.maxsize
input = sys.stdin.readline

dire = [[1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]]

def solve(n, graph):
    q = []
    # cnt, y, x
    heapq.heappush(q, [0, 0, 0])
    dist = [[INF for _ in range(n)] for _ in range(n)]
    dist[0][0] = 0

    while q:
        cnt, y, x = heapq.heappop(q)

        for dy, dx in dire:
            ny = y + dy
            nx = x + dx
            if 0 <= ny < n and 0 <= nx < n:
                if cnt + 1 < dist[ny][nx]:
                    if graph[ny][nx] == 0:
                        heapq.heappush(q, [cnt + 1, ny, nx])
                        dist[ny][nx] = cnt + 1
                    else:
                        heapq.heappush(q, [cnt, ny, nx])
                        dist[ny][nx] = cnt
    return dist[n-1][n-1]

n = int(input())
graph = [[] for _ in range(n)]
for i in range(n):
    graph[i] = list(map(int, input().strip()))

print(solve(n, graph))

```