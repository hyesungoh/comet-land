---
title: 'BOJ-4485 - Python'
date: 2021-1-14 12:21:13
category: 'Algorithm'
draft: false
---
n, n 크기의 정수로 이루어진 이차원 배열 graph를 입력받는다. 0, 0부터 n-1, n-1까지 해당 좌표의 정수를 합한 값이 최소가 되게 이동할 때, 해당 최소 값을 출력하는 문제. INF로 이루어진 같은 크기의 배열 dist를 만든 후 0, 0부터 현재 값 + graph에 저장된 다음 값을 더한 값이 dist에 저장된 값보다 작을 시 dist값 설정, 힙에 추가하도록 다익스트라 방법을 이용하여 풀었다.
```python
import sys
import heapq
input = sys.stdin.readline
INF = sys.maxsize

dire = [[1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]]


def dijk(n):
    dist = [[INF for _ in range(n)] for _ in range(n)]
    q = []

    dist[0][0] = graph[0][0]
    heapq.heappush(q, [dist[0][0], 0, 0])

    while q:
        now_dist, y, x = heapq.heappop(q)
        for ty, tx in dire:
            ny = y + ty
            nx = x + tx

            if 0 <= ny < n and 0 <= nx < n:
                ndist = now_dist + graph[ny][nx]
                if dist[ny][nx] > ndist:
                    dist[ny][nx] = ndist
                    heapq.heappush(q, [ndist, ny, nx])

    return dist[n-1][n-1]


i = 1
while True:
    n = int(input())
    if n == 0:
        break

    graph = []
    for _ in range(n):
        graph.append(list(map(int, input().split())))

    print("Problem %d: %d" %(i, dijk(n)))
    i += 1

```