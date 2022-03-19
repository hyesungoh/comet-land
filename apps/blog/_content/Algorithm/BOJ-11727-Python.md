---
title: 'BOJ-11727 - Python'
date: 2020-11-19 12:21:13
category: 'Algorithm'
draft: false
---
2xn 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 문제. 점화식 dp[i-1] + (dp[i-2]\*2)를 사용하여 풀었다.
```python
n = int(input())
dp = [1, 3]
for i in range(2, n):
    dp.append(dp[i-1] + (dp[i-2] * 2))
print(dp[n-1] % 10007)

```