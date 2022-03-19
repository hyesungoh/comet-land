---
title: 'BOJ-17352 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
N개의 섬이 있고 모든 섬들을 잇는 n-1개의 다리가 있다. 어느날 다리 하나가 무너졌을 때, 모든 섬들을 이을 수 있는 다리의 시작 섬과 끝 섬을 출력하는 문제. 정답은 여러개이며 그 중 하나만 출력해도 된다. 유니온 파인드 방법으로 풀었으며 입력되는 다리들을 기준으로 union하였다. 그 후 첫 번째 섬의 부모 노드와 2부터 N번째 섬의 부모 노드를 비교해 다를 때 1과 해당 섬의 번호를 출력한 후 종료하여 풀었다.
```python
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8)

def find(node):
    if node == parents[node]:
        return node
    p = find(parents[node])
    parents[node] = p
    return p

def union(a, b):
    pa, pb = find(a), find(b)

    if pa != pb:
        parents[pb] = pa

n = int(input())
parents = [i for i in range(n+1)]

for _ in range(n-2):
    s, e = map(int, input().split())
    union(s, e)

first = find(1)
for i in range(2, n+1):
    if find(i) != first:
        print(1, i)
        sys.exit(0)

```