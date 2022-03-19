---
title: 'BOJ-1715 - Python'
date: 2021-1-16 12:21:13
category: 'Algorithm'
draft: false
---
n이 2 이상일 때 n-2, n-1을 재귀적으로 호출하며, n이 1 이하일 때 n을 반환하는 함수가 있다. n이 주어졌을 때 해당 함수가 몇 번 호출되는 지 출력하는 문제. 배열의 0, 1 인덱스에 1로 값을 초기화한 후 2부터 `dp[i] = 1 + dp[i-2] + dp[i-1]`의 점화식을 사용하여 풀었다.
```python
dp = [0 for _ in range(51)]
dp[0], dp[1] = 1, 1
for i in range(2, 51):
    dp[i] = (1 + dp[i-1] + dp[i-2]) % 1000000007

print(dp[int(input())] % 1000000007)

```