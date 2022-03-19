---
title: 'BOJ-2493 - Python'
date: 2021-2-27 12:21:13
category: 'Algorithm'
draft: false
---
n개의 높이의 탑이 주어진다. 각 탑의 신호는 왼쪽으로 향하며 높이가 작은 탑은 신호를 수신할 수 없다. 가장 먼저 수신하는 신호의 번호를 공백으로 나누어 출력하는 문제. 첫 번째, 두 번째 풀이는 이중 반복문과 함수를 재귀적으로 이용해, 모든 경우의 수를 확인하여 풀었으나 당연히 시간초과 결과를 받게 되었다. 세번째 풀이는 값과 인덱스를 저장하는 스택을 이용하여, 처음부터 마지막까지 값을 비교하는데, 스택의 마지막 값이 현재 반복중인 값보다 클 시 해당 인덱스의 값을 인덱스 스택의 마지막 값에 할당한다. 값이 작거나 같을 시에는 스택의 값을 빼주어 비교할 연산을 줄여 풀었다.
```python
# n = int(input())
# l = list(map(int, input().split()))
# rec = [0 for _ in range(n)]
#
# for i in range(n-1, -1, -1):
#     for j in range(i-1, -1, -1):
#         if l[i] <= l[j]:
#             rec[i] = j+1
#             break
# print(*rec)
#
# def solve(check_id, cur_id):
#     if 0 <= check_id < n and 0 <= cur_id < n:
#         if l[check_id] >= l[cur_id]:
#             rec[cur_id] = check_id+1
#         return
#     if check_id > 0:
#         solve(check_id-1, cur_id)
#
# n = int(input())
# l = list(map(int, input().split()))
# rec = [0 for _ in range(n)]
#
# for i in range(1, n):
#     solve(i-1, i)
#
# print(*rec)

n = int(input())
l = list(map(int, input().split()))

value_stack = []
index_stack = []
answer = [0 for _ in range(n)]

for i in range(n):
    while value_stack:
        if value_stack[-1] > l[i]:
            answer[i] = index_stack[-1] + 1
            break
        else:
            value_stack.pop()
            index_stack.pop()

    value_stack.append(l[i])
    index_stack.append(i)

print(*answer)

```