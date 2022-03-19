---
title: 'BOJ-1012 - Python'
date: 2020-10-4 12:21:13
category: 'Algorithm'
draft: false
---
0과 1로 이루어진 2차원 배열을 입력받은 후 상하좌우 연결된 그룹의 수를 출력하는 문제. 첫 풀이로 각 정점을 이차원 배열에 입력한 후, 이차원 배열의 크기만큼 반복문을 수행할 때 방문 여부를 저장하는 배열, 그룹 숫자를 저장할 배열을 이용하여 풀었다. 두번째 풀이에서는 방문 확인 배열 대신 그래프의 값을 수정하는 식으로 수정, 그룹 숫자를 저장하는 배열 대신 정수형 변수를 사용하여 풀었다.
```python
# from collections import deque
# import sys
# input = sys.stdin.readline
#
# def bfs():
#     pass
# dx = [0, 0, 1, -1]
# dy = [1, -1, 0, 0]
#
# for _ in range(int(input())):
#     n, m, k = map(int, input().split())
#     graph = [[0 for _ in range(m)] for _ in range(n)]
#     group = [[0 for _ in range(m)] for _ in range(n)]
#     visit = [[0 for _ in range(m)] for _ in range(n)]
#
#
#     for _ in range(k):
#         y, x = map(int, input().split())
#         graph[y][x] = 1
#
#     g_min = 0
#     q = deque()
#     for y in range(n):
#         for x in range(m):
#             # 1이며 방문한 적이 없을 때
#             if graph[y][x] == 1 and visit[y][x] == 0:
#                 # 큐에 추가
#                 q.append((y,x))
#                 # 그룹 넘버 + 1
#                 g_min += 1
#
#                 # 연결된 정점들이 없을 때 까지
#                 while q:
#                     a, b = q.popleft()
#                     visit[a][b] = 1
#                     group[a][b] = g_min
#
#                     # 상하좌우 확인
#                     for i in range(4):
#                         if 0 <= a + dy[i] < n and 0 <= b + dx[i] < m:
#                             if graph[a+dy[i]][b+dx[i]] == 1 and visit[a+dy[i]][b+dx[i]] == 0:
#                                 q.append((a+dy[i], b+dx[i]))
#
#     print(g_min)


from collections import deque
import sys
input = sys.stdin.readline
dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]

def bfs(start, graph):
    q = deque()
    q.append(start)

    while q:
        a, b = q.popleft()
        graph[a][b] = 0
        for i in range(4):
            n_y = a + dy[i]
            n_x = b + dx[i]
            if 0 <= n_y < y and 0 <= n_x < x and graph[n_y][n_x] == 1:
                q.append((n_y, n_x))
                graph[n_y][n_x] = 0
    return 1

for _ in range(int(input())):
    y, x, k = map(int, input().split())
    graph = [[0 for _ in range(x)] for _ in range(y)]

    for _ in range(k):
        t_y, t_x = map(int, input().split())
        graph[t_y][t_x] = 1

    count = 0
    for i in range(y):
        for j in range(x):
            if graph[i][j] == 1:
                count += bfs((i,j), graph)

    print(count)

```