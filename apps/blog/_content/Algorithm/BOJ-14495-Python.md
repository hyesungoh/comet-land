---
title: 'BOJ-14495 - Python'
date: 2021-1-13 12:21:13
category: 'Algorithm'
draft: false
---
f(n) = f(n-1) + f(n-3)의 점화식을 갖는 피보나치 비스무리한 수열의 n번째 수를 출력하는 문제. 주어진 점화식을 이용하여 간단히 풀었다.
```python
n = int(input())
dp = [1, 1, 1]
for i in range(3, n):
    dp.append(dp[i-3]+dp[i-1])
print(dp[n-1])

```