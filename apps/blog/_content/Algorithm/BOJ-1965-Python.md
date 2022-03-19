---
title: 'BOJ-1965 - Python'
date: 2021-1-30 12:21:13
category: 'Algorithm'
draft: false
---
상자의 크기가 주어졌을 때 앞의 상자는 뒤에 있는 상자보다 작을 때 들어갈 수 있다고 한다. n개의 상자의 크기가 주어질 때 한 번에 넣을 수 있는 최대 상자 개수를 출력하는 문제. 가장 긴 증가하는 수열 문제와 같이 수가 증가하는 부분이 제일 큰 것을 출력하는 문제. 첫 풀이는 입력되는 마지막 상자부터 첫 상자까지 반복을 수행하며 크기를 비교하여 `dp[j] = max(dp[i]+1, dp[j])`의 점화식을 이용하여 풀었다. 두 번째 풀이는 처음부터 마지막까지 반복하며 `dp[i] = max(dp[i], dp[j]+1)`의 점화식을 이용하여 풀었다.
```python
# n = int(input())
# l = list(map(int, input().split()))
# dp = [1 for _ in range(n)]
#
# for i in range(n-1, -1, -1):
#     for j in range(i-1, -1, -1):
#         if l[i] > l[j]:
#             dp[j] = max(dp[i]+1, dp[j])
#
# print(max(dp))

n = int(input())
l = list(map(int, input().split()))
dp = [1 for _ in range(n)]

for i in range(1, n):
    for j in range(i):
        if l[i] > l[j]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))

```