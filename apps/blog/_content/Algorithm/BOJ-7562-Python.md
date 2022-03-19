---
title: 'BOJ-7562 - Python'
date: 2020-12-10 12:21:13
category: 'Algorithm'
draft: false
---
체스 보드의 크기를 입력받은 후 나이트 말의 시작 좌표와 도착 좌표를 입력받는다. 최소 몇 번 말을 움직여야 도착 좌표까지 이동할 수 있는 지 출력하는 문제. 첫 풀이는 queue에 카운트를 넣으며, 2차원 배열은 방문 확인을 위해 사용하여 풀으며 두번째 풀이는 2차원 배열에 움직인 횟수를 저장하여 풀었다. 여러 방법으로 계속해서 풀었으나 틀렸습니다 결과를 받게되었는데 말이 갈 수 있는 방향을 저장해 놓은 배열이 잘못돼 있었다.
```python
from collections import deque
import sys
input = sys.stdin.readline

dire = [[2, -1], # 상 좌
        [2, 1], # 상 우
        [1, 2], # 우 상
        [-1, 2], # 우 하
        [-2, 1], # 하 우
        [-2, -1], # 하 좌
        [1, -2], # 좌 상
        [-1, -2]] # 좌 하


# def bfs(start, goal_y, goal_x):
#     q = deque()
#     q.append(start + [0])
#     while q:
#         now_y, now_x, cnt = q.popleft()
#
#         if now_y == goal_y and now_x == goal_x:
#             return cnt
#
#         for dire_y, dire_x in dire:
#             next_y = now_y + dire_y
#             next_x = now_x + dire_x
#             if 0 <= next_y < size and 0 <= next_x < size:
#                 if not board[next_y][next_x]:
#                     q.append([next_y, next_x, cnt+1])
#                     board[next_y][next_x] = True
# t = int(input())
# for _ in range(t):
#     size = int(input())
#     board = [[False for _ in range(size)] for _ in range(size)]
#     start_y, start_x = map(int, input().split())
#     goal_y, goal_x = map(int, input().split())
#
#     ans = bfs([start_y, start_x], goal_y, goal_x)
#     print(ans)


def bfs(start_y, start_x, goal_y, goal_x):
    q = deque()
    q.append([start_y, start_x])
    board[start_y][start_x] = 1

    while q:
        now_y, now_x = q.popleft()

        if now_y == goal_y and now_x == goal_x:
            return board[now_y][now_x] - 1

        for dire_y, dire_x in dire:
            next_y = now_y + dire_y
            next_x = now_x + dire_x
            if 0 <= next_y < size and 0 <= next_x < size:
                if board[next_y][next_x] == 0:
                    q.append([next_y, next_x])
                    board[next_y][next_x] = board[now_y][now_x] + 1

t = int(input())
for _ in range(t):
    size = int(input())
    board = [[0 for _ in range(size)] for _ in range(size)]
    start_y, start_x = map(int, input().split())
    goal_y, goal_x = map(int, input().split())

    if start_y == goal_y and start_x == goal_x:
        print(0)
        continue

    ans = bfs(start_y, start_x, goal_y, goal_x)
    print(ans)

```