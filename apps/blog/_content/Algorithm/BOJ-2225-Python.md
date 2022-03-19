---
title: 'BOJ-2225 - Python'
date: 2021-2-15 12:21:13
category: 'Algorithm'
draft: false
---
0부터 n까지의 정수 k개를 더해서 그 합이 n이 되는 경우의 수를 구하는 문제. 수의 순서만 다를 때도 다른 경우로 새며 한 개의 수를 여러 번 쓸 수도 있다. k가 1일 때는 모든 경우가 1이며, 2일 때는 i+1의 값들이 정답이다. 경우의 수를 나열해보니 1, 3 = (1, 2 + 1, 1)과 같은 dp[i] = dp[i] + dp[i-1]의 점화식이 도출되어 k+1과 n+1까지의 이중 반복문을 이용하여 풀었다.
```python
n, k = map(int, input().split())
dp = [0 for _ in range(n+1)]
dp[0] = 1

for i in range(1, k+1):
    for j in range(1, n+1):
        dp[j] = (dp[j-1] + dp[j]) % 1000000000

print(dp[n])

```