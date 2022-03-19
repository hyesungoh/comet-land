---
title: 'BOJ-2565 - Python'
date: 2021-3-8 12:21:13
category: 'Algorithm'
draft: false
---
두 개의 전봇대에 N개의 전깃줄이 있다. 각 전깃줄마다 두 전봇대에 연결되는 위치의 번호가 주어질 때, 남아있는 모든 전깃줄이 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄의 최소 개수를 구하는 문제. 첫번째 전봇대에 붙은 위치를 기준으로 정렬 후, 가장 긴 증가하는 부분 수열을 구하였다. 그리고 그 수를 n에 뺀 값을 출력하여 풀었다. 정렬하였기 때문에 증가하는 부분 수열이 겹치지 않는 전깃줄의 수이기 때문이다.
```python
import sys
input = sys.stdin.readline

n = int(input())
graph = sorted(list(map(int, input().split())) for _ in range(n))
dp = [1 for _ in range(n)]

for i in range(n):
    for j in range(i):
        if graph[i][1] > graph[j][1]:
            dp[i] = max(dp[i], dp[j] + 1)

print(n - max(dp))

```