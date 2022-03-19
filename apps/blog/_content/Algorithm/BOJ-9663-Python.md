---
title: 'BOJ-9663 - Python'
date: 2020-10-20 12:21:13
category: 'Algorithm'
draft: false
---
[n][n] 크기의 체스판에서 n개의 퀸이 있을 때 서로 공격할 수 없는 자리의 경우의 수를 출력하는 문제. 첫 풀이는 False로 이루어진 2차원 배열을 사용하였다. 2중 반복문을 수행하고 False일 때 해당하는 상하좌우와 대각선을 체크해주는 함수를 만들어 값을 변환시킨 후 재귀적으로 호출하였다. 하지만 이 방법은 성공한 풀이가 되지 못했다. 값을 false로 바꿀 때 현재 반복중인 퀸이 체크한 부분만 false를 해야하는데 해당 방법을 해결하지 못했다. 두번째 풀이는 좌표를 압축하여 사용할 3가지 1차원 배열을 만들었다. 대각선 배열의 길이는 2\*n-1의 수식을 사용하였다. 백트래킹의 기본적인 부분은 똑같으나 n과 비교하는 depth를 하나의 행으로 사용하며 해당 대각선을 계산하는 공식이 나는 유추해내지 못했을 것 같다. 오른쪽 위로 향하는 대각선은 depth + 현재 반복 인자인 i이며 왼쪽 위의 인덱스가 0이다. 오른쪽 아래로 향하는 대각선은 depth - i + n - 1의 수식을 사용하며 오른쪽 위의 인덱스가 0이... 더 열심히 해야겠다.
```python
# import sys
# input = sys.stdin.readline
#
# n = int(input())
# ans = 0
# l = [[False for _ in range(n)] for _ in range(n)]
#
# def bt(depth):
#     global ans
#
#     if n == depth:
#         ans += 1
#         return
#
#     for i in range(n):
#         for j in range(n):
#             if not l[i][j]:
#                 check_true(l, i, j)
#                 bt(depth+1)
#                 check_false(l, i, j)
#
#
# def check_true(l, i, j):
#     for y in range(n): # 직선 체크
#         if 0 <= y < n:
#             l[y][j] = True
#             l[i][y] = True
#
#         if 0 <= i-y < n and 0 <= j-y < n:
#             l[i - y][j - y] = True
#         if 0 <= i+y < n and 0 <= j+y < n:
#             l[i + y][j + y] = True
#
#
#         if 0 <= i-y < n and 0 <= j+y < n:
#             l[i - y][j + y] = True
#         if 0 <= i+y < n and 0 <= j-y < n:
#             l[i + y][j - y] = True
#
# def check_false(l, i, j):
#     for y in range(n): # 직선 체크
#         if 0 <= y < n:
#             l[y][j] = False
#             l[i][y] = False
#
#         if 0 <= i-y < n and 0 <= j-y < n:
#             l[i - y][j - y] = False
#         if 0 <= i+y < n and 0 <= j+y < n:
#             l[i + y][j + y] = False
#
#         if 0 <= i-y < n and 0 <= j+y < n:
#             l[i - y][j + y] = False
#         if 0 <= i+y < n and 0 <= j-y <n:
#             l[i + y][j - y] = False
#
# bt(0)
# print(ans)

import sys
input = sys.stdin.readline

n = int(input())
ans = 0

st = [False] * n
# 대각선 좌표를 압축하여 저장하기 위해 최대 길이 설장 ex) 3 = 4, 4 = 6, 5 = 8
pl = [False] * (2*n-1)
mi = [False] * (2*n-1)

def bt(depth):
    global ans

    if depth == n:
        ans += 1
        return

    for i in range(n):
        # pl은 오른쪽 위로 향하는 대각선, 왼쪽 위의 인덱스가 0
        # mi는 오른쪽 아래로 향하는 대각선, 오른쪽 위의 인덱스가 0
        if not st[i] and not pl[depth+i] and not mi[depth-i+n-1]:
            st[i] = pl[depth+i] = mi[depth-i+n-1] = True
            bt(depth+1)
            st[i] = pl[depth + i] = mi[depth - i + n - 1] = False

bt(0)
print(ans)

```