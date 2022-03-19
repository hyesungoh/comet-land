---
title: 'BOJ-17845 - Python'
date: 2021-3-7 12:21:13
category: 'Algorithm'
draft: false
---
공부할 수 있는 시간, 공부할 수 있는 과목의 수가 주어진다. 그 이후에 과목별로 과목의 중요도, 필요한 공부시간이 주어질 때 최대가 되는 중요도를 출력하는 문제. 배낭 형식의 문제로, k에 대해서 모든 과목을, time에 대해서 모든 시간을 반복하였다. 담을 수 없을 때 저번 반복에서 계산한 동일 시간의 최대치를, 담을 수 있을 때 저번 반복에서 계산한 동일 시간의 최대치와, 현재 중요도 + 저번 물건의 반복 값에서의 시간 - 현재 과목의 시간을 뺀 최대값을 더하여 풀었다.
```python
import sys
input = sys.stdin.readline

N, K = map(int, input().split())
dp = [[0 for _ in range(N+1)] for _ in range(K)]
impos = []
times = []
for _ in range(K):
    i, t = map(int, input().split())
    impos.append(i)
    times.append(t)

for k in range(K):

    now_impo = impos[k]
    now_time = times[k]
    for time in range(N+1):
        if time < now_time:
            dp[k][time] = dp[k-1][time]
        else:
            dp[k][time] = max(dp[k-1][time], dp[k-1][time-now_time] + now_impo)


print(dp[-1][N])

```