---
title: 'BOJ-11724 - Python'
date: 2020-10-6 12:21:13
category: 'Algorithm'
draft: false
---
입력될 노드의 수 n과 간선의 수 m을 입력받은 후 뱡향 없는 그래프를 x, y를 입력받는다. 그 후 연결 요소의 개수를 출력하는 문제. 그래프를 n+1 크기를 갖는 2차원 배열로 만들어 0과 1로 연결돼 있는 지 판단 했으며 방문한 적이 있는지 확인할 리스트를 n+1 크기로 만들어 사용했다. dfs 함수를 각 연결된 노드들을 재귀적으로 호출하여 visit 리스트의 값을 1로 수정하여 풀었다. 추가적으로 지금까지 A == 1, A == 0으로 사용했던 것을 가독성을 생각해 A, not A와 같이 바꾸어도 보았다.
```python
# import sys
# sys.setrecursionlimit(10000)
# input = sys.stdin.readline
#
# n, m = map(int, input().split())
# graph = [[0] * (n + 1) for _ in range(n + 1)]
# visit = [0 for _ in range(n + 1)]
# count = 0
#
# for _ in range(m):
#     x, y = map(int, input().split())
#     graph[x][y] = 1
#     graph[y][x] = 1
#
# def dfs(node):
#     visit[node] = 1
#     for k in range(1, n+1):
#         if graph[node][k] == 1 and visit[k] == 0:
#             dfs(k)
#
# for i in range(1, n+1):
#     if visit[i] == 0:
#         dfs(i)
#         count += 1
#
# print(count)

import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[0] * (n + 1) for _ in range(n + 1)]
visit = [0 for _ in range(n + 1)]
count = 0

for _ in range(m):
    x, y = map(int, input().split())
    graph[x][y] = 1
    graph[y][x] = 1

def dfs(node):
    visit[node] = 1
    for k in range(1, n+1):
        if graph[node][k] and not visit[k]:
            dfs(k)

for i in range(1, n+1):
    if not visit[i]:
        dfs(i)
        count += 1

print(count)

```