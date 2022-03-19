---
title: 'BOJ-14501 - Python'
date: 2020-11-18 12:21:13
category: 'Algorithm'
draft: false
---
n일 동안 t일이 걸리는 보수 p가 주어지는 일을 받는다. 한 번에 한가지 일 밖에 할 수 없을 때 n일 동안 얻을 수 있는 보수의 최대치를 출력하는 문제. 보수와 시간을 각각 다른 리스트 p, t에 저장하였다. 그 후 n+1의 길이만큼 dp를 만든 후 n부터 0까지 점화식을 사용하여 풀었다. 점화식은 index + t[index]가 n보다 클 시 dp[index + 1], 아닐 시 max(dp[index + 1], p[index] + dp[index + t[index])이다.
```python
import sys
input = sys.stdin.readline

n = int(input())
t = [0 for _ in range(n)]
p = [0 for _ in range(n)]
dp = [0 for _ in range(n+1)]

for i in range(n):
    ti, pi = map(int, input().split())
    t[i] = ti
    p[i], dp[i] = pi, pi

for i in range(n-1, -1, -1):
    if n < i + t[i]:
        dp[i] = dp[i+1]
        continue
    dp[i] = max(dp[i+1], p[i] + dp[i + t[i]])

print(dp[0])

```