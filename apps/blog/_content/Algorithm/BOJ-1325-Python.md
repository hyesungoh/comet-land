---
title: 'BOJ-1325 - Python'
date: 2020-09-06 12:21:13
category: 'Algorithm'
draft: false
---
두 개의 컴퓨터 번호 x, y가 주어졌을 때 y를 해킹하면 x도 해킹할 수 있다고 한다. 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 출력하는 문제. 첫 풀이는 dfs, 깊이우선탐색으로 구현을 하였으나 백준풀이상 시간초과 결과를 받게 되었고, 검색 후 deque를 사용한 bfs와 sys.stdin.readline을 사용하여 시간을 줄이고 기존 내 풀이와 다르게 그래프를 2차원 배열로 저장하였다. 그렇게 하여도 백준 python3 채점 기준에는 통과하지 못하여 pypy3로 변경하여 풀 수 있게 되었다.
```python
# import sys
# input = sys.stdin.readline
# from collections import deque
#
# def dfs(graph, start):
#     que = deque()
#     que.append(start)
#     visit = []
#
#     while que:
#         node = que.popleft()
#         if node not in visit:
#             visit.append(node)
#             if node in graph:
#                 que.extend(graph[node])
#     return len(visit)
#
# graph = {}
# n, m = map(int, input().split())
# for _ in range(m):
#     x, y = map(int, input().split())
#     if y in graph:
#         graph[y].append(x)
#     else:
#         graph[y] = [x]
#
# len_list = []
# temp_max = 0
# for i in range(n):
#     temp = dfs(graph, i+1)
#     if temp_max < temp:
#         len_list = [i+1]
#         temp_max = temp
#     elif temp_max == temp:
#         len_list.append(i+1)
#
# print(*len_list)

import sys
input = sys.stdin.readline
from collections import deque

def bfs(start):
    q = deque()
    q.append(start)
    visit = [0 for _ in range(n + 1)]
    visit[start] = 1
    cnt = 1
    while q:
        st = q.popleft()
        for i in graph[st]:
            if visit[i] == 0:
                visit[i] = 1
                cnt += 1
                q.append(i)
    return cnt


n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().split())
    graph[y].append(x)

len_list = []
temp_max = 0
for i in range(1, n+1):
    temp = bfs(i)
    if temp_max == temp:
        len_list.append(i)
    if temp_max < temp:
        len_list = []
        len_list.append(i)
        temp_max = temp
print(*len_list)

```