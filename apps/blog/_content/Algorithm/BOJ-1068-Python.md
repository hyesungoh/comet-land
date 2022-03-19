---
title: 'BOJ-1068 - Python'
date: 2020-12-3 12:21:13
category: 'Algorithm'
draft: false
---
n개의 노드로 이루어진 트리를 각 노드의 부모들의 번호를 입력받으며 주어진다. 그 후 지울 노드 번호를 입력받으며 해당 트리의 리프 노드의 수를 출력하는 문제. 첫 풀이는 지워지지 않은 노드들을 저장하는 배열을 이용하여 확인하여 수를 세는 방식으로 하였으나, 지운 노드를 유일한 자식으로 가지고 있는 노드의 반례를 풀지 못했으며 dfs 연산을 두 번하는 과정이 필요없을 것 같아 다시 풀게 되었다. 두번째 풀이는 dfs을 하며 노드의 자식이 없을 때 리프 노드라고 판단, 자식 노드를 큐에 추가할 때 삭제할 노드가 있으며 해당 노드의 길이가 1일 때도 리프 노드로 판단하는 부분을 넣어 풀었다. 수차례 괴롭히던 런타임 에러는 그래프를 먼저 생성하는 방식으로 해결하였다.
```python
# def dfs(start):
#     q = [start]
#
#     while q:
#         node = q.pop()
#         is_alive[node] = False
#         for next in graph[node]:
#             q.append(next)
#
# def lif(root):
#     global ans
#     q = [root]
#     while q:
#         node = q.pop()
#         if graph[node] == [] and is_alive[node]:
#             ans += 1
#         elif len(graph[node]) and not is_alive[node]:
#
#         else:
#             for next in graph[node]:
#                 q.append(next)
#
# n = int(input())
# l = list(map(int, input().split()))
# del_node = int(input())
#
# is_alive = [True for _ in range(n)]
# ans = 0
#
# graph = {}
# root = 0
# for i in range(n):
#     graph[i] = []
#     if l[i] != -1:
#         graph[l[i]].append(i)
#     else:
#         root = i
# dfs(del_node)
# lif(root)
#
# print(graph)
# print(is_alive)
# print(ans)


def count_lif(root, del_node):
    global ans
    q = []
    if del_node != root:
        q = [root]

    while q:
        node = q.pop()

        if graph[node] == []:
            ans += 1

        for next in graph[node]:
            if next == del_node:
                if len(graph[node]) == 1:
                    ans += 1
            else:
                q.append(next)

n = int(input())
l = list(map(int, input().split()))
del_node = int(input())

ans = 0
graph = {}
root = 0

for i in range(n):
    graph[i] = []

for i in range(n):
    if l[i] != -1:
        graph[l[i]].append(i)
    else:
        root = i

count_lif(root, del_node)
print(ans)

```