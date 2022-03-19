---
title: 'BOJ-4803 - Python'
date: 2021-3-5 12:21:13
category: 'Algorithm'
draft: false
---
그래프의 정점의 수, 간선의 수가 주어진다. 그 후 간선을 잇는 두 정점이 주어진다. 해당 그래프에서 사이클이 없는 트리의 개수를 구하는 문제. 두 풀이 모두 유니온 파인드 방법을 이용하여 풀었다. 첫 번째 풀이는 유니온 시 두 부모 노드가 같을 시 해당 부모 노드의 값을 모두 0으로 바꿔주어 트리인 것을 처리할려했다. 그대로 제출했더니 RecursionError를, setrecursionlimit를 설정하여 제출시 메모리초과 결과를 받았다. 질문을 통해 알게 된 사실인데 0이 속한 그룹의 루트가 0이라는 보장이 없기 때문에 루프가 생기는 문제가 있었다. 사이클인 트리와 연결되는 다른 노드.. 가 있을 때 정도라고 이해했다. 두 번째 풀이는 해당 부모노드의 값이 사이클인 지 저장하는 배열을 이용하여 풀었다. 유니온 시 더욱 작은 값을 부모 노드에 저장하고, 큰 노드의 값이 사이클이면 작은 노드의 값도 사이클로 할당하였다. 또한 간선이 잇는 노드를 입력받을 시 두 노드의 부모 노드가 같을 시 사이클로 저장하였다. 출력시 사이클이지 않은 값을 세어 주었으며, 사이클이 아닐 시 해당 노드를 사이클로 다시 판명하여 중복되는 것을 막았다.
```python
# import sys
# input = sys.stdin.readline
# sys.setrecursionlimit(10**9)
#
# def find(node):
#     if node == parents[node]:
#         return node
#
#     p = find(parents[node])
#     parents[node] = p
#     return p
#
# def union(a, b):
#     pa, pb = find(a), find(b)
#
#     if pa != pb:
#         parents[pb] = pa
#     else:
#         parents[pa] = 0
#         parents[pb] = 0
#
# def output(i, n):
#     if n == 0:
#         print("Case %d: No trees." %i)
#     elif n == 1:
#         print("Case %d: There is one tree." %i)
#     else:
#         print("Case %d: A forest of %d trees." %(i, n))
#
# index = 1
# while True:
#     n, m = map(int, input().split())
#     if n == m == 0: break
#
#     parents = [i for i in range(n+1)]
#     for _ in range(m):
#         a, b = map(int, input().split())
#         union(a, b)
#
#     tree = set(find(i) for i in parents)
#     output(index, len(tree)-1)
#     index += 1


import sys
input = sys.stdin.readline

def find(node):
    if node == -1:
        return 0
    if node == parents[node]:
        return node

    p = find(parents[node])
    parents[node] = p
    return p

def union(a, b):
    if a < b:
        if iscycle[b]: iscycle[a] = True
        parents[b] = a
    else:
        if iscycle[a]: iscycle[b] = True
        parents[a] = b

def output(i, n):
    if n == 0:
        print("Case %d: No trees." %i)
    elif n == 1:
        print("Case %d: There is one tree." %i)
    else:
        print("Case %d: A forest of %d trees." %(i, n))

index = 1
while True:
    n, m = map(int, input().split())
    if n == m == 0: break

    parents = [i for i in range(n+1)]
    iscycle = [False for i in range(n+1)]

    for _ in range(m):
        a, b = map(find, map(int, input().split()))
        if a == b:
            iscycle[a] = True
        else:
            union(a, b)

    ans = 0
    for i in range(1, n+1):
        pi = find(i)
        if not iscycle[pi]:
            ans += 1
            iscycle[pi] = True

    output(index, ans)
    index += 1

```