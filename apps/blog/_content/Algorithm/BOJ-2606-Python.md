---
title: 'BOJ-2606 - Python'
date: 2021-1-28 12:21:13
category: 'Algorithm'
draft: false
---
그래프 탐색을 이용한 바이러스 문제를 다시 풀어보았다. 기존 방법인 현재 노드의 방문확인 후 연결된 노드들을 extend하는 방법을 유지하며 그래프의 선언 및 추가 부분을 깔끔하게 바꾼 방법으로 풀었으며 다른 방법은 요즘 주로 사용하는 자식 노드들을 기준으로 반복을 돌며 자식노드들의 방문 확인 후 q에 추가하는 방법이다. 두 방법 중 extend하는 방법이 시간이 백준 상 4ms 차이로 빠른데, 내장 함수 사용에서 나오는 차이갔다. 하지만 extend는 확장성이 떨어지기 때문에 간단한 문제에서만 쓰일 것 같은 내 예상이다.
```python
# def dfs(graph):
#     visit = []
#     stack = [1]
#     while stack:
#         node = stack.pop()
#         if node not in visit:
#             visit.append(node)
#             if node in graph:
#                 stack.extend(graph[node])
#     return visit
#
# graph = {}
# input()
# for _ in range(int(input())):
#     x, y = map(int, input().split())
#     if x in graph:
#         graph[x].append(y)
#     else:
#         graph[x] = [y]
#     if y in graph:
#         graph[y].append(x)
#     else:
#         graph[y] = [x]
#
# print(len(dfs(graph))-1)

# def solve():
#     visit = [False for _ in range(n+1)]
#     visit[1] = True
#     q = [1]
#     ans = 0
#
#     while q:
#         node = q.pop()
#         for next_node in graph[node]:
#             if not visit[next_node]:
#                 visit[next_node] = True
#                 q.append(next_node)
#                 ans += 1
#     return ans
#
# n = int(input())
# m = int(input())
# graph = {i: [] for i in range(1, n+1)}
#
# for _ in range(m):
#     s, e = map(int, input().split())
#     graph[s].append(e)
#     graph[e].append(s)
# print(solve())

def solve():
    visit = [False for _ in range(n+1)]
    q = [1]

    while q:
        node = q.pop()
        if not visit[node]:
            visit[node] = True
            q.extend(graph[node])

    return visit.count(True) - 1

n = int(input())
m = int(input())
graph = {i: [] for i in range(1, n+1)}

for _ in range(m):
    s, e = map(int, input().split())
    graph[s].append(e)
    graph[e].append(s)

print(solve())

```