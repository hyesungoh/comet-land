---
title: 'BOJ-1976 - Python'
date: 2021-2-7 12:21:13
category: 'Algorithm'
draft: false
---
n개의 도시마다 다른 도시들로 갈 수 있는지 입력받은 후, m개의 도시 루트를 입력받는다. 해당 루트대로 이동 할 수 있으면 YES, 아닐 시 NO를 출력하는 문제. 첫 번째 풀이는 플로이드 와샬 방법을 이용하여 완전 탐색하여 풀었다. 이번 풀이는 유니온 파인드 방법을 이용하여 풀었으며 입력되는 루트의 부모 루트가 모두 동일 시 YES를, 아닐 시 NO를 출력하여 풀었다.
```python
# import sys
# input = sys.stdin.readline
#
# def solve():
#     for i in range(m - 1):
#         now = dist[i]
#         next = dist[i + 1]
#         if not graph[now][next]:
#             return False
#     return True
#
# n = int(input())
# m = int(input())
# graph = [list(map(int, input().split())) for _ in range(n)]
#
# for k in range(n):
#     graph[k][k] = 1
#     for i in range(n):
#         for j in range(n):
#                 if graph[i][k] and graph[k][j]:
#                     graph[i][j] = 1
#
# dist = list(map(lambda x: int(x)-1, input().split()))
#
# print("YES" if solve() else "NO")


import sys
input = sys.stdin.readline

def find(node):
    if node == parent[node]:
        return node

    p = find(parent[node])
    parent[node] = p
    return p

def union(a, b):
    parent_a = find(a)
    parent_b = find(b)

    if parent_a != parent_b:
        parent[parent_b] = parent_a


n = int(input())
m = int(input())
parent = [i for i in range(n)]

for i in range(n):
    linked = list(map(int, input().split()))
    for j in range(n):
        if linked[j]:
            union(i, j)

plan = list(map(int, input().split()))
ans = set([find(parent[i-1])for i in plan])
print("YES" if len(ans) == 1 else "NO")

```