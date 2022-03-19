---
title: 'BOJ-14728 - Python'
date: 2021-1-18 12:21:13
category: 'Algorithm'
draft: false
---
n개의 물건, 배낭의 크기 t를 입력받은 후 n개의 무게와 값이 주어지는 냅색 문제. 위 문제와 동일한 방식으로 풀었다.
```python
import sys
input = sys.stdin.readline

n, t = map(int, input().split())
times = []
scores = []
ans = [[0 for _ in range(t+1)] for _ in range(n)]

for _ in range(n):
    tt, ss = map(int, input().split())
    times.append(tt)
    scores.append(ss)

for i in range(n):
    for j in range(t+1):
        time = times[i]
        score = scores[i]
        if j < time:
            ans[i][j] = ans[i-1][j]
        else:
            ans[i][j] = max(ans[i-1][j], score + ans[i-1][j-time])

print(ans[n-1][t])

```