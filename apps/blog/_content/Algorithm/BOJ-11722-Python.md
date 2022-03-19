---
title: 'BOJ-11722 - Python'
date: 2020-12-10 12:21:13
category: 'Algorithm'
draft: false
---
n의 크기를 갖는 수열을 입력받은 후 해당 수열에서 가장 긴 감소하는 부분 수열의 길이를 출력하는 문제. 0부터 n까지 반복을 수행하며 0부터 i까지 반복한다. i의 값보다 j의 값이 클 때 dp[i] = max(dp[i], dp[j]+1)의 점화식을 사용하여 풀었다.
```python
n = int(input())
l = list(map(int, input().split()))
dp = [0 for _ in range(n+1)]
m = 0
for i in range(n):
    for j in range(0, i):
        if l[i] < l[j]:
            dp[i] = max(dp[i], dp[j] + 1)
    m = max(dp[i], m)
print(m+1)

```