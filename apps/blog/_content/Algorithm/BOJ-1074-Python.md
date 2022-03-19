---
title: 'BOJ-1074 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
n, r, c를 입력받은 후 2^N \* 2^N 크기의 배열을 Z모양으로 탐색할 때, 쪽 위에 있는 칸이 하나가 아니라면, 배열을 4등분 한 후에 (크기가 같은 2^(N-1)로) 재귀적으로 순서대로 방문하면 (r, c)를 몇 번째로 방문하는지 출력하는 문제. 첫 풀이는 배열의 크기, 좌표 4등분을 재귀적으로 사용하는 함수를 구현하여 풀었으나 런타임 에러 결과를 받게 되었다. 재귀의 제한을 늘리니 메모리 초과 결과를 받게 되었다. 두번째 풀이는 목표 좌표가 어느 사분면에 있는 지 계산하여 다른 사분면의 크기만큼 더하는 것과 배열의 크기를 줄이는 것을 반복하여 풀었다.
```python
# 1074
# import sys
# sys.setrecursionlimit(100000)
# n, r, c = map(int, input().split())
# count = 0
# def z(N, x, y):
#     global count
#     if N == 2:
#         if x == r and y == c:
#             print(count)
#             return
#         count += 1
#
#         if x + 1 == r and y == c:
#             print(count)
#             return
#         count += 1
#
#         if x == r and y + 1 == c:
#             print(count)
#             return
#         count += 1
#
#         if x + 1 == r and y + 1 == c:
#             print(count)
#             return
#         count += 1
#
#     else:
#         z(N//2, y, x)
#         z(N//2, y, x+N//2)
#         z(N//2, y+N//2, x)
#         z(N//2, y+N//2, x+N//2)
# z(n*n, 0, 0)

n, r, c = map(int, input().split())
count = 0
while n > 0:
    if n == 1: # 목표 좌표가 2사분면일 때
        if r == 0 and c == 1: # 오른쪽 위
            count += 1
        elif r == 1 and c == 0: # 아래
            count += 2
        elif r == 1 and c == 1: # 오른쪽 아래
            count += 3
    else: # 목표 좌표가 사
        temp = (2 ** n) // 2  # 현재 n의 배열 크기 ex) 2 == 4, 3 == 8
        if temp > r and temp <= c: # 목표 좌표가 1사분면에 있을 때
            count += temp ** 2 # 2사분면의 크기만큼 더함
            c -= temp # 다음 반복에서 계산을 위해
        elif temp <= r and temp > c: # 목표 좌표가 3사분면에 있을 때
            count += (temp ** 2) * 2 # 1, 2사분면의 크기만큼 더함
            r -= temp # 다음 반복에서 계산을 위해
        elif temp <= r and temp <= c: # 목표 좌표가 4분면에 있을 때
            count += (temp ** 2) * 3 # 1, 2, 3사분면의 크기만큼 더함
            r -= temp # 다음 반복에서 계산을 위해
            c -= temp
    n -= 1 # 현재 배열을 4등분 n = 3, temp = 8 > n = 2, temp = 4
print(count)

```