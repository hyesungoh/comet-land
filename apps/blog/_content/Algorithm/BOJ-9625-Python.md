---
title: 'BOJ-9625 - Python'
date: 2021-1-12 12:21:13
category: 'Algorithm'
draft: false
---
문자열에서 버튼을 누를 시 A는 B로, B는 AB로 만든다고 한다. A의 문자열에서 버튼을 N번 눌렀을 때 A, B의 수를 출력하는 문제. 점화식 `dp[i] = [dp[i-1][1], dp[i-1][0] + dp[i-1][1]]`을 이용하여 풀었다.
```python
n = int(input())
dp = [[0 ,0] for _ in range(n+1)]
dp[0], dp[1] = [1, 0], [0, 1]

for i in range(2, n+1):
    dp[i] = [dp[i-1][1], dp[i-1][0] + dp[i-1][1]]

print(*dp[n])

```