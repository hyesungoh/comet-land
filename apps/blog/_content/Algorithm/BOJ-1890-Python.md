---
title: 'BOJ-1890 - Python'
date: 2021-1-23 12:21:13
category: 'Algorithm'
draft: false
---
n x n 크기의 배열이 있다. 각 인덱스에는 아래, 오른쪽 방향으로 몇 칸갈 수 있는지 정수가 있다. 0, 0부터 n, n까지 가는 경로의 개수를 출력하는 문제. 첫번째 풀이는 queue를 이용한 DFS로 풀었으나 메모리초과 결과를 받게 되었다. 배열의 크기가 넘지 않았을 경우에는 재방문도 가능하게 구현을 하여 100 크기에 전부 1이 저장돼 있을 때 메모리초과 결과를 일으키는 것 같다. 두 번째 풀이는 n의 크기만큼 이중반복문을 수행하는 다이내믹 프로그래밍 방법을 이용하여 풀었다. 마지막 값은 저장돼 있는 값이 0이기 때문에 값이 중복되어 저장되기 때문에 마지막 값일 시 break하여 마지막 dp의 값을 출력하여 풀었다.
```python
# import sys
# from collections import deque
# input = sys.stdin.readline
#
# def solve():
#     q = deque()
#     q.append([0, 0])
#     dp[0][0] = 1
#
#     while q:
#         y, x = q.popleft()
#         move = graph[y][x]
#         if move == 0:
#             continue
#         ny, nx = y + move, x + move
#
#         if 0 <= ny < n:
#             q.append([ny, x])
#             dp[ny][x] += dp[y][x]
#
#         if 0 <= nx < n:
#             q.append([y, nx])
#             dp[y][nx] += dp[y][x]
#
#
# n = int(input())
# graph = [[] for _ in range(n)]
# dp = [[0 for _ in range(n)] for _ in range(n)]
# for i in range(n): graph[i] = list(map(int, input().split()))
#
# solve()
# print(dp[n-1][n-1])


import sys
input = sys.stdin.readline

def solve():
    dp[0][0] = 1

    for y in range(n):
        for x in range(n):
            if y == n-1 and x == n-1:
                break
            move = graph[y][x]
            ny, nx = y + move, x + move

            if 0 <= ny < n:
                dp[ny][x] += dp[y][x]

            if 0 <= nx < n:
                dp[y][nx] += dp[y][x]


n = int(input())
graph = [[] for _ in range(n)]
dp = [[0 for _ in range(n)] for _ in range(n)]
for i in range(n): graph[i] = list(map(int, input().split()))

solve()
print(dp[n-1][n-1])

```