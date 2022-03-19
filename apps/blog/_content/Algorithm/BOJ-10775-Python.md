---
title: 'BOJ-10775 - Python'
date: 2021-2-7 12:21:13
category: 'Algorithm'
draft: false
---
G개의 게이트에 P개의 비행기가 순서대로 도착할 예정이다. 각 비행기는 1번부터 입력되는 gi번까지 도킹할 수 있을 때 최대한 많은 비행기가 도킹한 수를 출력하는 문제. 첫 번째 풀이는 그리디 방법을 이용하여 입력되는 gi부터 0까지 반복문을 이용하여 풀었으나 당연하게도 시간초과 결과를 받게 되었다. 입력되는 G와 P의 최대 수가 10의 5승이기 떄문. 두 번째 풀이는 유니온 파인드 방법을 이용하여 gi마다 루트 노드를 찾으며 해당 노드와 -1한 노드를 union한다. 위 연산을 반복하여 gi의 루트 노드가 0일 때 반복문을 종료하여 풀었다. 유니온 파인드를 이런 방법으로도 응용할 수 있는 지 알게 되었다.
```python
# import sys
# input = sys.stdin.readline
#
# G = int(input())
# P = int(input())
#
# gates = [False for _ in range(G+1)]
# for i in range(P):
#     t = int(input())
#     for j in range(t, 0, -1):
#         if not gates[j]:
#             gates[j] = True
#             break
#         elif j == 1:
#             print(i)
#             exit()
# print(P)


import sys
input = sys.stdin.readline

def find(node):
    if node == parent[node]:
        return node
    p = find(parent[node])
    parent[node] = p
    return p

def union(a, b):
    pa = find(a)
    pb = find(b)

    if pa != pb:
        parent[pa] = pb

G = int(input())
P = int(input())

parent = [i for i in range(G+1)]
for i in range(P):
    t = int(input())
    pt = find(t)
    if pt == 0:
        print(i)
        exit()

    union(pt, pt-1)
print(P)

```