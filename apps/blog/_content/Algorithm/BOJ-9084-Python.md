---
title: 'BOJ-9084 - Python'
date: 2021-2-10 12:21:13
category: 'Algorithm'
draft: false
---
TC만큼 n개의 동전을 입력받고 m원을 해당 동전으로 몇가지 경우의 수로 나타낼 수 있는 지 출력하는 문제. n과 m+1까지를 이용하여 반복문을 수행하며 1원부터 m원까지의 경우의 수를 계산하였다. 현재 동전 i가 현재 가격 j를 이용하여 `dp[j] += dp[j-coins[i]]`의 점화식을 이용하여 풀었다.
```python
for _ in range(int(input())):
    n = int(input())
    coins = list(map(int, input().split()))
    m = int(input())

    dp = [0 for _ in range(m+1)]
    dp[0] = 1
    for i in range(n):
        for j in range(1, m + 1):
            if j - coins[i] >= 0:
                dp[j] += dp[j-coins[i]]
    print(dp[-1])

```