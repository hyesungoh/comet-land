---
title: 'BOJ-2156 - Python'
date: 2020-11-19 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수들이 입력되고 연속으로 3개의 수를 합칠 수 없는 조건이 있을 때, 수들을 합친 최대의 수를 출력하는 문제. 합한 값을 저장하는 dp, 입력되는 수를 저장하는 l을 이용하여 아래 점화식을 도출해 풀었다.```pythonmax(l[i] + l[i-1] + dp[i-3], l[i] + dp[i-2], dp[i-1])```
```python
import sys
input = sys.stdin.readline

n = int(input())
dp = [0]
l = [0]
for _ in range(n):
    t = int(input())
    dp.append(t)
    l.append(t)

if n == 1:
    print(dp[1])
    exit(0)

dp[2] = dp[1] + dp[2]
for i in range(3, n+1):
    dp[i] = max(l[i] + l[i-1] + dp[i-3], l[i] + dp[i-2], dp[i-1])

print(dp[-1])

```