---
title: 'BOJ-11057 - Python'
date: 2020-12-1 12:21:13
category: 'Algorithm'
draft: false
---
오르막 수는 수의 자리가 오름차순을 이루는 수를 말하며 인접한 수가 같아도 오름차순으로 친다. 이 때 수의 길이 n이 주어질 때 오르막 수의 개수를 구하는 문제. [n+1][10]의 크기로 이루어진 배열을 만든 후 [1]의 값을 모두 1로 초기화한다. 그 후 up은 j보다 같으며 큰 수로 반복을 하게 작성 후 `dp[i][j] += dp[i-1][up]`의 점화식을 사용하여 풀었다.
```python
n = int(input())
dp = [[0 for _ in range(10)] for _ in range(n+1)]
for i in range(10):
    dp[1][i] = 1

for i in range(2, n+1):
    for j in range(10):
        for up in range(j, 10):
            dp[i][j] += dp[i-1][up]
print(sum(dp[n]) % 10007)

```