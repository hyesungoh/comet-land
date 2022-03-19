---
title: 'BOJ-4195 - Python'
date: 2021-2-5 12:21:13
category: 'Algorithm'
draft: false
---
n개의 두 문자열이 공백으로 나눠져 입력된다. 해당 두 문자열은 서로 연결된 상태이며 매 입력마다 해당 관계의 연결된 모든 노드의 수를 입력하는 문제. 첫번째 풀이는 단순 DFS 탐색을 통해 풀었으나 예상했던 것 같이 시간초과결과를 받게 되었다. 입력되는 방문확인을 배열로 하며 in 메소드를 이용하여 확인한 것과 매 입력마다 DFS 연산을 수행하는 점이 작성하면서도 시간초과가 확실할 것으로 예상했다. 두 번째 풀이는 유니온 파인드 방법을 이용하여 풀었다. 부모 노드를 저장하는 딕셔너리, 해당 노드의 연결된 사람을 저장하는 딕셔너리 두개를 이용하여 union시 루트 노드의 값을 더해준 후 입력되는 문자열의 루트 노드의 수를 출력하여 풀었다.
```python
# import sys
# input = sys.stdin.readline
#
# def countFollow(node):
#     q = [node]
#     followers = [node]
#
#     while q:
#         now = q.pop()
#         if now in graph:
#             for next in graph[now]:
#                 if not next in followers:
#                     followers.append(next)
#                     q.append(next)
#     return len(followers)
#
# for _ in range(int(input())):
#     n = int(input())
#     graph = {}
#     for _ in range(n):
#         a, b = input().split()
#         if a in graph: graph[a].append(b)
#         else: graph[a] = [b]
#         if b in graph: graph[b].append(a)
#         else: graph[b] = [a]
#
#         print(countFollow(a))


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
        followers[parent_a] += followers[parent_b]

for _ in range(int(input())):
    n = int(input())
    parent = {}
    followers = {}

    for _ in range(n):
        a, b = input().split()

        if a not in parent:
            parent[a] = a
            followers[a] = 1
        if b not in parent:
            parent[b] = b
            followers[b] = 1

        union(a, b)
        print(followers[find(a)])

```