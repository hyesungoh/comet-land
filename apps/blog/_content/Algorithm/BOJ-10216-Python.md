---
title: 'BOJ-10216 - Python'
date: 2021-2-13 12:21:13
category: 'Algorithm'
draft: false
---
최대 5000의 값을 갖는 좌표 y, x와 반경 거리를 나타내는 r이 입력된다. n개의 좌표가 입력될 때 연결된 것을 계산하여 몇 개의 구역이 있는 지 출력하는 문제. 첫 번째 풀이는 5000의 크기를 갖는 2차원 배열을 이용하여 dfs를 사용해 풀었으나 메모리초과와 시간초과 결과를 받게 되었다. 입력되는 점과 방문확인을 위한 배열을 한 개로 사용하여도 같은 결과를 받았다. 두 번째 풀이는 유니온 파인드 방식을 이용하여 풀었다. 행렬, 리스트를 사용하지 않으며 n개의 배열을 만들어 x의 차이, y의 차이를 각각 곱한 값을 더한 값과 두 좌표의 r을 곱한 값을 비교하여 r을 곱한 값이 클 시 연결돼 있음을 판단하여 합집합 연산을 하여 풀었다.
```python
# import sys
# from collections import deque
# input = sys.stdin.readline
#
# dire = [[0,1],[0,-1],[1,0],[-1,0]]
#
# def check(Y, X, r):
#     for y in range(Y-r, Y+r):
#         for x in range(X-r, X+r):
#             if 0 <= y <= max_pos and 0 <= x <= max_pos:
#                 graph[y][x] = 1
#
# def dfs(Y, X, cnt):
#     q = deque()
#     q.append([Y, X])
#     graph[Y][X] = cnt
#
#     while q:
#         y, x = q.popleft()
#         for ty, tx in dire:
#             ny, nx = ty + y, tx + x
#             if 0 <= ny <= max_pos and 0 <= nx <= max_pos:
#                 if graph[ny][nx] == 1:
#                     graph[ny][nx] = cnt
#                     q.append([ny, nx])
#
# for _ in range(int(input())):
#     N = int(input())
#     check_list = []
#     max_pos = 0
#
#     for _ in range(N):
#         y, x, r = map(int, input().split())
#         check_list.append([y, x, r])
#         max_pos = max(max_pos, y, x)
#
#     graph = [[-1 for _ in range(max_pos+1)] for _ in range(max_pos+1)]
#     # visit = [[0 for _ in range(max_pos+1)] for _ in range(max_pos+1)]
#     for y, x, r in check_list:
#         check(y, x, r)
#
#     cnt = 1
#     for y in range(max_pos):
#         for x in range(max_pos):
#             if graph[y][x] == 1:
#                 cnt += 1
#                 dfs(y, x, cnt)
#
#     print(cnt-1)


import sys
input = sys.stdin.readline

def union(a, b):
    parent_a = find(a)
    parent_b = find(b)

    if parent_a != parent_b:
        parent[parent_b] = parent_a

def find(node):
    if parent[node] == node:
        return node

    p = find(parent[node])
    parent[node] = p
    return p

for _ in range(int(input())):
    n = int(input())

    parent = [i for i in range(n)]
    ypos = [0 for i in range(n)]
    xpos = [0 for i in range(n)]
    radius = [0 for i in range(n)]

    for i in range(n):
        y, x, r = map(int, input().split())
        ypos[i] = y
        xpos[i] = x
        radius[i] = r

    ans = n
    for i in range(n):
        for j in range(i+1, n):
            ydif = ypos[i] - ypos[j]
            xdif = xpos[i] - xpos[j]
            r = radius[i] + radius[j]

            if (ydif*ydif + xdif*xdif) <= (r*r):
                if find(i) != find(j):
                    union(i, j)
                    ans -= 1

    print(ans)

```