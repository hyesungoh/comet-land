---
title: 'BOJ-1167 - Python'
date: 2020-10-30 12:21:13
category: 'Algorithm'
draft: false
---
위와 같이 '트리의 지름'을 구하는 문제. 다른 점은 트리를 입력받을 때 '시작점 도착지1 거리1 도착지2 거리2 -1'과 같은 형태로 입력되는 것 이다. 입력되는 줄을 1부터 길이-1까지 2칸씩 진행하여 {시작점: [[도착지, 거리], [도착지1, 거리1]]}과 같은 형태로 저장하였다. 트리를 이동하는 연산은 [위 문제](../master/python/BOJ_1967.py)와 동일하게 풀었다. 자세한 풀이는 위 문제의 주석에 설명해 놓았다.
```python
import sys
from collections import deque
input = sys.stdin.readline

def dijkstra(graph, start):
    q = deque([[start, 0]])
    visit = [False for _ in range(len(graph)+1)]
    visit[start] = True
    max_value = 0
    max_node = 0

    while q:
        node, weight = q.popleft()
        if max_value < weight:
            max_value = weight
            max_node = node

        for next in graph[node]:
            if not visit[next[0]]:
                visit[next[0]] = True
                q.append([next[0], weight + next[1]])

    return max_node, max_value

n = int(input())
graph = {}
for _ in range(n):
    l = list(map(int, input().split()))
    start = l[0]
    for i in range(1, len(l)-1, 2):
        if start not in graph:
            graph[start] = [[l[i], l[i+1]]]
        else:
            graph[start].append([l[i], l[i+1]])

mn, mv = dijkstra(graph, 1)
print(dijkstra(graph, mn)[1])

```