---
title: 'BOJ-1697 - Python'
date: 2020-10-10 12:21:13
category: 'Algorithm'
draft: false
---
현재 위치와 목표 위치 n, x가 입력된다. 현재 위치에서 1초 후에 n\*2, n+1, n-1의 위치로 이동할 수 있을 때 목표 위치 x에 도착하는 가장 빠른 시간이 몇 초 후인지 구하는 문제. 첫 풀이는 너비 우선 탐색 bfs로 구현을 하였다. 딕셔너리를 만들어 방문 확인을 했으며 방문하지 않았을 때 q에 추가하여 풀었다. 이 방법으로 풀었을 때 백준상 메모리초과 결과를 얻게 되었고 이유는 딕셔너리를 계속하여 추가하는 것과 노드의 최대 크기인 100,000을 넘어서까지 계산된 것으로 유추된다. 두번째 풀이는 방문 확인을 100001의 길이를 가진 리스트로, 큐에 위치와 걸린 시간으로 이루어진 배열을 넣어 풀었으며 q에 추가할 때 범위 100,000보다 작은 지 확인하여 추가하여 풀었다.
```python
# 2*x, x-1, x+1
# from collections import deque
# n, k = map(int, input().split())
# q = deque([n])
# d = {n: 0}
#
# while True:
#     node = q.popleft()
#     if node == k:
#         print(d[node])
#         break
#     else:
#         t_n1 = node * 2
#         t_n2 = node + 1
#         t_n3 = node - 1
#
#         if t_n1 not in d:
#             d[t_n1] = d[node] + 1
#             q.append(t_n1)
#
#         if t_n2 not in d:
#             d[t_n2] = d[node] + 1
#             q.append(t_n2)
#
#         if t_n3 not in d:
#             d[t_n3] = d[node] + 1
#             q.append(t_n3)

from collections import deque
n, k = map(int, input().split())
visit = [False] * 100001
q = deque([[n, 0]])

while q:
    node = q.popleft()
    loca = node[0]
    sec = node[1]

    if not visit[loca]:
        visit[loca] = True
        if loca == k:
            print(sec)
            exit(0)

        sec += 1
        t = [loca*2, loca+1, loca-1]

        for i in t:
            if 0 <= i <= 100000:
                q.append([i, sec])

```