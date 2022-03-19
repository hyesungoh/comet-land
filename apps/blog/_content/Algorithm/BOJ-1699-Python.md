---
title: 'BOJ-1699 - Python'
date: 2020-12-14 12:21:13
category: 'Algorithm'
draft: false
---
정수 n이 주어질 때, 이 수를 제곱수의 합으로 나타낼 때, 제일 작은 제곱수의 수를 출력하는 문제. 다이내믹 프로그래밍 문제로 1부터 n까지 반복, 1부터 j\*j가 i보다 작을 때 까지 반복한다. `dp[i], dp[i-(j*j)]+1` 중 작은 것을 배열데 대입하도록 점화식을 구성하여 풀었다.
```python
n = int(input())
dp = [i for i in range(n+1)]

for i in range(1, n+1):
    for j in range(1, i):
        if j * j > i:
            break
        dp[i] = min(dp[i], dp[i-j*j]+1)

print(dp[n])

```