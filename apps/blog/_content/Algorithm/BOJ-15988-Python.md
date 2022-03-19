---
title: 'BOJ-15988 - Python'
date: 2021-1-16 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 1, 2, 3의 더하기로 나타내는 방법의 수를 출력하는 문제. i번째 수는 i-1번째 공식에 각각 1을 더하면 되며 i-2번째 공식에 각각 2를, i-3번째 공식에는 3을 더하면 되기 때문에 dp[i-3:i]의 수를 더한 값을 저장 및 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

dp = [0 for _ in range(1000001)]
dp[1] = 1
dp[2] = 2
dp[3] = 4
for i in range(4, 1000001):
    dp[i] = sum(dp[i-3:i]) % 1000000009

for i in range(int(input())):
    print(dp[int(input())] % 1000000009)

```