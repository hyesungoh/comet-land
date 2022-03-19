---
title: 'BOJ-20040 - Python'
date: 2021-3-10 12:21:13
category: 'Algorithm'
draft: false
---
문제를 해석할 시 n개의 정점, m개의 간선이 있다. 해당 트리가 사이클이 되는 간선의 순서를 출력하는 문제. 분리집합을 이용하여 풀었다. 각 정점의 부모를 저장하는 배열을 n크기로 만들어 매 간선마다 부모 노드를 확인한 후, 부모 노드가 같을 시 해당 간선의 순서를 출력, 아닐 시 union하여 풀었다.
```python
import sys
input = sys.stdin.readline

def find(node):
    if node == parents[node]:
        return node
    p = find(parents[node])
    parents[node] = p
    return p

def union(a, b):
    if a < b:
        parents[b] = a
    else:
        parents[a] = b


n, m = map(int, input().split())
parents = [i for i in range(n)]
isCycle = [False for _ in range(n)]


for cnt in range(m):
    a, b = map(find, (map(int, input().split())))
    if a == b:
        print(cnt + 1)
        exit(0)
    union(a, b)
print(0)

```