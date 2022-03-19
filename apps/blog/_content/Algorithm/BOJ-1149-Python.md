---
title: 'BOJ-1149 - Python'
date: 2020-10-19 12:21:13
category: 'Algorithm'
draft: false
---
n개의 줄만큼 3개의 정수들이 입력된다. 앞뒤로 같은 인덱스에 있는 값을 선택하지 못하는 조건을 지키며 각 줄마다 한 개의 정수를 더한 최솟값을 출력하는 문제. 간단한 dp 문제로써 2차원 배열을 사용하여 풀었다. 1부터 n-1까지 반복을 수행하며 dp[i][0]에 dp[i-1][1]과 dp[i-1][2] 중 작은 값들 더하는 행위를 반복하였다. 마지막에 dp[n-1]중 제일 작은 값을 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
dp = []
for _ in range(n):
    dp.append(list(map(int, input().split())))

for i in range(1, n):
    dp[i][0] += min(dp[i-1][1], dp[i-1][2])
    dp[i][1] += min(dp[i-1][0], dp[i-1][2])
    dp[i][2] += min(dp[i-1][0], dp[i-1][1])

print(min(dp[n-1]))

```