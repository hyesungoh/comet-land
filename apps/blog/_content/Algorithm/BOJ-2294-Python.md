---
title: 'BOJ-2294 - Python'
date: 2021-1-25 12:21:13
category: 'Algorithm'
draft: false
---
n개의 동전이 입력되며 합이 k원이 되도록 할 때 동전의 최소 개수를 출력하는 문제. 최댓값인 10001로 k+1 크기의 배열을 이용하여 다이내믹 프로그래밍 방법을 이용하여 풀었다. `dp[j] = min(dp[j], dp[j-coin]+1)`의 점화식을 이용하였으며 coin은 입력되는 동전의 크기이다.
```python
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
dp = [10001 for _ in range(k+1)]
dp[0] = 0

for i in range(n):
    t = int(input())
    for j in range(t, k+1):
        dp[j] = min(dp[j], dp[j-t]+1)

print(dp[k] if dp[k] != 10001 else -1)

```