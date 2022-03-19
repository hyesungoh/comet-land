---
title: 'BOJ-17212 - Python'
date: 2021-1-13 12:21:13
category: 'Algorithm'
draft: false
---
1, 2, 5, 7원의 동전을 이용하여 n원을 동전의 최소 개수로 만들었을 때 동전의 수를 출력하는 문제. 0 ~ 7원까지의 최소 수를 저장한 후 8부터 n원까지 반복을 수행하여 `min(dp[i-7], dp[i-5], dp[i-2], dp[i-1]) + 1` 점화식을 사용하여 저장 후 출력하여 풀었다.
```python
n = int(input())
dp = [0, 1, 1, 2, 2, 1, 2, 1]
for i in range(8, n+1):
    m = min(dp[i-7], dp[i-5], dp[i-2], dp[i-1]) + 1
    dp.append(m)

print(dp[n])

```