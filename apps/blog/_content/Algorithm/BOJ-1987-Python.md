---
title: 'BOJ-1987 - Python'
date: 2021-1-24 12:21:13
category: 'Algorithm'
draft: false
---
알파벳으로 이루어진 2차원 배열을 입력받는다. 상하좌우로 움직일 수 있으나 방문했던 알파벳은 방문할 수 없는 조건을 가질 때, 최대한 방문할 수 있는 알파벳의 수를 출력하는 문제. 첫 번째 풀이는 아스키코드를 기준으로 방문확인 배열을 만들어서 dfs 연산을 수행하여 풀었으나. 다른 노드가 방문했던 노드까지 방문했다고 확인을 하여 틀렸습니다 결과를 받게 되었다. 이를 수정하고자 q에 방문했던 알파벳들로 이루어진 문자열을 넣어 방문확인을 했으나 시간, 메모리 초과결과를 얻게 되었다. 세 번째 풀이는 첫 번째 풀이를 바탕으로 백트래킹을 사용하여 방문확인 후 재귀적으로 호출, 방문확인 해제하여 풀었다.
```python
# from collections import deque
# import sys
# input = sys.stdin.readline
# dire = [[0, 1],
#         [0, -1],
#         [1, 0],
#         [-1, 0]]
#
# def return_ord(char):
#     return ord(char) - 65
#
# def check(char, visit, boolean):
#     visit[return_ord(char)] = not visit[return_ord(char)]
#
# def solve():
#     visit = [False for _ in range(26)]
#
#     q = deque()
#     # y, x, cnt
#     q.append([0, 0, 1])
#     check(graph[0][0], visit, True)
#     ans = 0
#
#    while q:
#         y, x, cnt = q.popleft()
#         ans = max(ans, cnt)
#
#         for dy, dx in dire:
#             ny = y + dy
#             nx = x + dx
#             if 0 <= ny < r and 0 <= nx < c:
#                 if not visit[return_ord(graph[ny][nx])]:
#                     check(graph[ny][nx], visit, True)
#                     q.append([ny, nx, cnt+1])
#
#     return ans
#
# r, c = map(int, input().split())
# graph = [input() for _ in range(r)]
# print(solve())


# import sys
# input = sys.stdin.readline
# dire = [[0, 1],
#         [0, -1],
#         [1, 0],
#         [-1, 0]]
#
#
# def solve():
#     q = set([(0, 0, 1, graph[0][0])])
#     ans = 0
#
#     while q:
#         y, x, cnt, visited = q.pop()
#         ans = max(ans, cnt)
#
#         for dy, dx in dire:
#             ny = y + dy
#             nx = x + dx
#             if 0 <= ny < r and 0 <= nx < c:
#                 if graph[ny][nx] not in visited:
#                     q.add((ny, nx, cnt+1, visited + graph[ny][nx]))
#
#     return ans
#
# r, c = map(int, input().split())
# graph = [input() for _ in range(r)]
# print(solve())

import sys
input = sys.stdin.readline

dire = [[0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]]

def bt(y, x, depth):
    global ans
    ans = max(ans, depth)

    for ty, tx in dire:
        ny = y + ty
        nx = x + tx

        if 0 <= ny < r and 0 <= nx < c:
            if not visit[graph[ny][nx]]:
                visit[graph[ny][nx]] = True
                bt(ny, nx, depth+1)
                visit[graph[ny][nx]] = False


r, c = map(int, input().split())
ans = 0
graph = [list(map(lambda x: ord(x) - 65, input())) for _ in range(r)]
visit = [False for _ in range(26)]
visit[graph[0][0]] = True
bt(0, 0, 1)
print(ans)

```