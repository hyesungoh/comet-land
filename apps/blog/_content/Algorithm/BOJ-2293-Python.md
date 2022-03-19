---
title: 'BOJ-2293 - Python'
date: 2020-12-1 12:21:13
category: 'Algorithm'
draft: false
---
n가지 종류의 동전으로 k원을 나타내는 경우의 수를 구하는 문제. [k+1]의 리스트를 만든 후 딱 떨어지는 경우를 위해 [0]을 1로 초기화한다. 그 후 1원부터 k원까지 반복을 수행하며 입력받은 cost - coin이 0보다 크거나 같을 때 `dp[cost] += dp[cost-coin]`을 하여 경우의 수를 계속 더하도록 풀었다.
```python
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
dp = [0 for _ in range(k+1)]
dp[0] = 1

l = []
for _ in range(n):
    l.append(int(input()))

for coin in l:
    for cost in range(1, k+1):
        if cost-coin >= 0:
            dp[cost] += dp[cost-coin]
print(dp[k])

```