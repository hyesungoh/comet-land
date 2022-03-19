---
title: 'BOJ-14888 - Python'
date: 2020-11-24 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수열과 n-1개로 이루어진 사칙연산자의 수를 입력받는다. 입력받은 사칙연산자를 이용하여 모든 경우의 수로 계산을 하였을 때 최대값과 최소값을 출력하는 문제. 사칙연산자로 이루어진 리스트를 만든 후 해당 사칙연산자를 이용해 eval 함수를 이용하여 계산, 방문 확인 리스트를 사용하여 백트래킹하였지만 시간초과 결과를 받게 되었다. 두번째 풀이는 각 연산자들의 수를 기준으로 백트래킹시 재귀적으로 호출하는 함수의 매개변수의 값을 빼주어 해당 연산을 해주는 식으로 풀었다.
```python
# import sys
# sys.setrecursionlimit(10**9)
# input = sys.stdin.readline
#
# def bt(depth, val):
#     global MAX, MIN, visit_op
#
#     if depth == n-1:
#         if val > MAX:
#             MAX = val
#         if val < MIN:
#             MIN = val
#
#         return
#
#     for i in range(n-1):
#         if not visit_op[i]:
#             t_val = str(val) + lop[i] + str(ln[depth + 1])
#             visit_op[i] = True
#             bt(depth+1, int(eval(t_val)))
#
#             visit_op[i] = False
#
#
# n = int(input())
# ln = list(map(int, input().split()))
# t_lop = ['+', '-', '*', '/']
# op = list(map(int, input().split()))
# lop = []
#
# visit_op = [False for _ in range(n)]
# MIN = 100000000
# MAX = -100000000
#
# for i in range(4):
#     [lop.append(t_lop[i]) for _ in range(op[i])]
#
# bt(0, ln[0])
# print(MAX)
# print(MIN)

import sys
input = sys.stdin.readline

def bt(depth, val, p, m, mul, div):
    global MAX, MIN

    if depth == n:
        MAX = max(MAX, val)
        MIN = min(MIN, val)
        return

    if p:
        bt(depth+1, val + l[depth], p-1, m, mul, div)
    if m:
        bt(depth + 1, val - l[depth], p, m - 1, mul, div)
    if mul:
        bt(depth + 1, val * l[depth], p, m, mul - 1, div)
    if div:
        bt(depth+1, -(-val // l[depth]) if val < 0 else val // l[depth], p, m, mul, div - 1)


n = int(input())
l = list(map(int, input().split()))
op = list(map(int, input().split()))

MAX = -1000000001
MIN = 1000000001

bt(1, l[0], op[0], op[1], op[2], op[3])
print(MAX)
print(MIN)

```