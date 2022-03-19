---
title: 'BOJ-9251 - Python'
date: 2020-11-3 12:21:13
category: 'Algorithm'
draft: false
---
두 문자열을 입력받은 후 최장 공통 부분 수열의 길이를 출력하는 문제. 다이내믹 프로그래밍 방법을 이용하여 풀었다. 현재 문자가 동일 시에 현재 문자가 포함되지 않은 최장 공통 부분 수열의 길이 + 1, 포함되지 않을 시 현재 문자가 포함하지 않은 y문자, x문자의 값 중 큰 것을 배정, 배열의 마지막 값을 출력하여 풀었다.
```python
s1 = input(); l1 = len(s1)
s2 = input(); l2 = len(s2)
dp = [[0 for _ in range(l2+1)] for _ in range(l1+1)]

for y in range(1, l1+1):
    for x in range(1, l2+1):
        # dp[y][x] = dp[y-1][x-1] + 1 if s1[y-1] == s2[x-1] else max(dp[y-1][x], dp[y][x-1])
        if s1[y-1] == s2[x-1]:
            dp[y][x] = dp[y-1][x-1] + 1
        else:
            dp[y][x] = max(dp[y-1][x], dp[y][x-1])
print(dp[-1][-1])

```