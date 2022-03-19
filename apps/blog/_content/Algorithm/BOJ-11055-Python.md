---
title: 'BOJ-11055 - Python'
date: 2020-12-9 12:21:13
category: 'Algorithm'
draft: false
---
가장 큰 부분 수열 문제. 수열이 주어졌을 때 오름차 부분 수열의 최대합을 출력하는 문제. 첫 풀이는 탑다운 형식으로 최대 값을 저장하는 형식으로 풀었으나 2개 이상 띄워져 있는 부분 수열에는 적용하지 않는 문제가 있어 이중 반복문을 이용하여 풀었다. 0부터 i까지 반복문을 수행하며 수열의 i보다 j가 작을 때 dp[i]에 dp[i], dp[j] + l[i]의 값 중 큰 것을 할당하여 풀었다.
```python
# 11055
# n = int(input())
# l = list(map(int, input().split()))
# dp = l + [0]
# temp = 1001
#
# for i in range(n-1, -1, -1):
#     if l[i] < temp:
#         temp = l[i]
#         dp[i] = dp[i+1] + l[i]
#
#     if dp[i+1] <= l[i]:
#         temp = l[i]
#         dp[i] = l[i]
#
#     dp[i] = max(dp[i], dp[i+1])
# print(dp[0])

n = int(input())
l = list(map(int, input().split()))
dp = [0 for _ in range(n+1)]
m = 0

for i in range(n):
    dp[i] = l[i]
    for j in range(0, i):
        if l[i] > l[j]:
            dp[i] = max(dp[i], dp[j] + l[i])
    m = max(m, dp[i])
print(m)

```