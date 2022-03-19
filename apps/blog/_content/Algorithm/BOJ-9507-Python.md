---
title: 'BOJ-9507 - Python'
date: 2021-3-5 12:21:13
category: 'Algorithm'
draft: false
---
`dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4]`의 수열의 i번 째를 출력하는 문제. 최대 입력 예제인 68까지 수열을 만든 후 입력되는 테스트케이스를 출력하여 풀었다.
```python
dp = [1, 1, 2, 4]
for i in range(4, 69): dp.append(dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4])
[print(dp[int(input())]) for _ in range(int(input()))]

```