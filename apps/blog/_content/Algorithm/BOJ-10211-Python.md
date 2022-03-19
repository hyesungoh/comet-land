---
title: 'BOJ-10211 - Python'
date: 2021-2-23 12:21:13
category: 'Algorithm'
draft: false
---
TC만큼 n개의 정수로 이루어진 배열을 입력받는다. 해당 배열 중 원소의 합이 제일 큰 부분 배열의 값을 출력하는 문제. 다이내믹 프로그래밍 방법을 이용하여 `dp[i] = max(dp[i], dp[i] + dp[i-1])`의 점화식을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

for _ in range(int(input())):
    n = int(input())
    dp = list(map(int, input().split()))

    for i in range(1, n):
        dp[i] = max(dp[i], dp[i] + dp[i-1])
    print(max(dp))

```