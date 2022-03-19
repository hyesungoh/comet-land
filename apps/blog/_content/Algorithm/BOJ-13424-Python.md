---
title: 'BOJ-13424 - Python'
date: 2021-2-12 12:21:13
category: 'Algorithm'
draft: false
---
N개의 방, M개의 길이 있으며 각 길은 두 방의 번호, 길이를 입력받는 양방향 길이다. K명의 사람이 다른 방에 있을 때 이동 거리의 총하빙 최소가 되는 방을 출력하는 문제. 인접행렬을 이용하여 초기화는 INF로, 입력 후에는 길이를 저장하였다. 모든 입력이 완료될 시 플로이드 와샬 방법을 이용하여 모든 노드에 대해서 최소 길이를 저장 후, K명의 이동 거리를 총합하는 배열을 관리하여 풀었다.
```python
import sys
INF = sys.maxsize
input = sys.stdin.readline

def floyd():
    for k in range(1, N+1):
        graph[k][k] = 0
        for i in range(1, N+1):
            for j in range(1, N+1):
                graph[i][j] = min(graph[i][k] + graph[k][j], graph[i][j])

for _ in range(int(input())):
    N, M = map(int, input().split())
    graph = [[INF for _ in range(N+1)] for _ in range(N+1)]

    for _ in range(M):
        s, e, w = map(int, input().split())
        graph[s][e] = w
        graph[e][s] = w

    K = int(input())
    start = list(map(int, input().split()))
    floyd()

    values = [0 for _ in range(N+1)]
    values[0] = INF
    min_value = INF

    for node in range(1, N + 1):
        for person in start:
            values[node] += graph[person][node]
        min_value = min(min_value, values[node])

    print(values.index(min_value))

```