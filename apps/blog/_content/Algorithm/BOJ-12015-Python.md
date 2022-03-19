---
title: 'BOJ-12015 - Python'
date: 2020-12-13 12:21:13
category: 'Algorithm'
draft: false
---
n의 길이를 갖는 수열을 입력받은 후, 해당 수열의 증가하는 부분 수열의 최대 길이를 출력하는 문제. 첫번째 풀이는 O(n^2)의 시간복잡도를 갖는 dp를 이용하여 풀었다. 하지만 시간초과 결과를 받게 되었는데 해당 문제는 n이 최대 백만인 경우까지 있기 때문이다. 두번째 풀이는 O(nlogn)의 시간복잡도를 갖는 이분탐색을 이용하여 풀었다. n까지 반복을 수행하며 n의 크기를 갖는 vt 배열의 마지막 값과 비교하여 클 때 길이를 늘린 후 추가, 작을 시 현재 크기만큼 탐색을 통해 같은 값이 있을 때는 연산을 안하며 큰 값이 나왔을 때 해당 인덱스의 값을 바꿔준다. 탐색이 끝난 후까지 함수가 종료 안됐을 시 첫번째 값과 비교하여 값을 할당하여 풀었다. / 시간초과로 재채점되어 내장 라이브러리 bisect, sys.stdin.readline을 이용하여 다시 풀었다.
```python
# n = int(input())
# l = list(map(int, input().split()))
# dp = [1 for _ in range(n)]
# ans = 0
#
# for i in range(n):
#     for j in range(0, i):
#         if l[i] > l[j]:
#             dp[i] = max(dp[i], dp[j] + 1)
#     ans = max(dp[i], ans)
#
# print(ans)

# def lower_bound(length, value):

#     for i in range(length):
#         if vt[i] == value:
#             return

#         elif vt[i] > value:
#             vt[i] = value
#             return

#     if vt[0] > value:
#         vt[0] = value
#         return

# n = int(input())
# l = list(map(int, input().split()))
# vt = [0 for _ in range(n)]
# vt[0] = l[0]

# ans = 0

# for i in range(n):
#     if vt[ans] < l[i]:
#         ans += 1
#         vt[ans] = l[i]
#     else:
#         lower_bound(ans+1, l[i])

# print(ans+1)


import sys
from bisect import bisect_left
input = sys.stdin.readline

n = int(input())
l = list(map(int, input().split()))
stack = [0]

for i in l:
    if stack[-1] < i: stack.append(i)
    else: stack[bisect_left(stack, i)] = i

print(len(stack)-1)
```