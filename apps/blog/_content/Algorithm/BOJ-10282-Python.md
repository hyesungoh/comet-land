---
title: 'BOJ-10282 - Python'
date: 2021-1-27 12:21:13
category: 'Algorithm'
draft: false
---
a 컴퓨터가 b 컴퓨터를 의존할 시, b 컴퓨터가 해킹당하면 s초 후 a 컴퓨터가 감염된다고 한다. 컴퓨터 개수 n, 의존성 개수 d, 해킹당한 컴퓨터의 번호 c가 주어진 후 각각의 의존성이 주어질 때 총 감염되는 컴퓨터 수와 마지막 컴퓨터가 감염되기까지 걸리는 시간을 출력하는 문제. INF와 heap 연산을 이용하는 기본적인 다익스트라 방법을 이용하여 풀었다. 첫 접근은 다익스트라 연산중에 감염 컴퓨터 수와 마지막 컴퓨터가 감염되는 시간을 구할려 했으나 잘되지 않아 다익스트라 연산이 종료된 후 각각 컴퓨터들이 감염 경과 시간이 저장돼 있는 배열을 이용하여 풀었다.
```python
import sys
import heapq
INF = sys.maxsize
input = sys.stdin.readline

def solve(start, node_num):
    q = []
    heapq.heappush(q, [0, start])

    dist = [INF for _ in range(node_num+1)]
    dist[start] = 0

    while q:
        s, n = heapq.heappop(q)
        for nn, ts in graph[n]:
            ns = ts + s
            if dist[nn] > ns:
                dist[nn] = ns
                heapq.heappush(q, [ns, nn])

    return dist

for _ in range(int(input())):
    n, d, c = map(int, input().split())
    graph = [[] for _ in range(n+1)]
    for _ in range(d):
        a, b, s = map(int, input().split())
        graph[b].append([a, s])

    dist = solve(c, n)
    visited, second = 0, 0
    for temp in dist:
        if temp != INF:
            visited += 1
            second = max(second, temp)
    print(visited, second)

```