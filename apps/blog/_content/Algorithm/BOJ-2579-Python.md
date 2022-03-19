---
title: 'BOJ-2579 - Python'
date: 2020-11-12 12:21:13
category: 'Algorithm'
draft: false
---
다이내믹 프로그래밍 문제. n개의 수열이 주어지고 인덱스 +1, +2 값을 더할 수 있으나 연속하여 3개의 인덱스 값을 더할 수 없을 때 마지막 인덱스 값을 포함한 최대 값을 출력하는 문제. 합한 값을 저장할 dp, 인덱스의 값을 저장할 l, 리스트 2개를 사용했다. dp 0, 1, 2의 값은 수동적으로 작성 후 3부터 n까지 반복문을 이용하였다. i번째 값은 i-2의 합한 값 (+2), i-3의 합한 값 + i-1(+2+1)의 인덱스 값 중 더욱 큰 것을 비교하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
l = [0 for _ in range(301)]
dp = [0 for _ in range(301)]

for i in range(n):
    l[i] = int(input())

dp[0] = l[0]
dp[1] = l[0] + l[1]
dp[2] = max(l[2] + l[0], l[2] + l[1])

for i in range(3, n):
    dp[i] = max(dp[i-2], dp[i-3] + l[i-1]) + l[i]

print(dp[n-1])
```