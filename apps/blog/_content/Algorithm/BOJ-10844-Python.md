---
title: 'BOJ-10844 - Python'
date: 2020-11-16 12:21:13
category: 'Algorithm'
draft: false
---
자리수 n이 주어질 때, 모든 자리수의 차이가 1인 수를 계단 수라고 한다. 모든 자리수 개수를 1000000000으로 나눈 수를 출력하는 다이내믹 프로그래밍 문제. n이 1일 때, 각 수로 끝나는 경우는 1부터 9까지 모두 1이다. n이 2일 때, 각 수로 끝나는 경우는 0과 9를 제외하고 n-1의 자릿수 -1과 +1이다. 이를 점화식으로 사용하여 0과 9를 예외처리한 후 dp[y-1][x-1] + dp[y-1][x+1]을 사용하여 풀었다.
```python
n = int(input())
dp = [[1 for _ in range(10)] for _ in range(n)]
dp[0][0] = 0

for y in range(1, n):
    for x in range(10):
        if x == 0:
            dp[y][x] = dp[y-1][1]
        elif x == 9:
            dp[y][x] = dp[y-1][8]
        else:
            dp[y][x] = dp[y-1][x-1] + dp[y-1][x+1]

print(sum(dp[n-1]) % 1000000000)

```