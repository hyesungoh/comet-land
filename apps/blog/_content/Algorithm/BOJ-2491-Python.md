---
title: 'BOJ-2491 - Python'
date: 2021-2-16 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 나열된 수열이 있다. 그 수열 안에서 연속해서 커지거나 작아지는 수열 중 가장 길이가 긴 것을 찾아, 그 길이를 출력하는 문제. 커지는 것과 작아지는 것을 관리하는 두 배열을 만든 후 반복문을 이용하여 조건에 충족했을 때 `dp[i] = dp[i-1] + 1`의 점화식을 이용하여 풀었다.
```python
n = int(input())
l = list(map(int, input().split()))
pdp = [1 for _ in range(n)]
ndp = [1 for _ in range(n)]

for i in range(1, n):
    if l[i] >= l[i-1]: pdp[i] = pdp[i-1] + 1
    if l[i] <= l[i-1]: ndp[i] = ndp[i-1] + 1

print(max(max(pdp), max(ndp)))

```