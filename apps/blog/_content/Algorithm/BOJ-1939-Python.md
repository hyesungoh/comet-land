---
title: 'BOJ-1939 - Python'
date: 2021-2-17 12:21:13
category: 'Algorithm'
draft: false
---
n개의 섬에 양방향 m개의 다리가 있다. 이 때 해당 다리가 옮길 수 있는 최대 무게가 주어진다. 출발 섬과 도착 섬이 주어질 때 옮길 수 있는 최대 무게를 출력하는 문제. 분리집합 방식으로 풀었다. 입력받는 다리들을 Max heap형태로 저장 후, 모든 입력이 끝나면 각 다리의 두 섬을 union 연산한다. 그 후 정답을 찾을 두 섬의 parent 노드를 find 연산을 이용하여 비교하여 같을 시 현재 반복중인 다리의 길이를 출력하여 풀었다.
```python
import heapq
import sys
input = sys.stdin.readline

def find(node):
    if node == parent[node]:
        return node

    p = find(parent[node])
    parent[node] = p
    return p

def union(a, b):
    pa, pb = find(a), find(b)

    if pa != pb:
        parent[pb] = pa

def solve(s, e):
    while bridges:
        w, n1, n2 = heapq.heappop(bridges)
        w = abs(w)
        union(n1, n2)

        if find(s) == find(e):
            return w


n, m = map(int, input().split())
parent = [i for i in range(n+1)]
bridges = []

for _ in range(m):
    s, e, w = map(int, input().split())
    heapq.heappush(bridges, [-w, s, e])

s, e = map(int, input().split())
print(solve(s, e))

```