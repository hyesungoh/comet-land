---
title: 'BOJ-14003 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열(LIS)를 구하는 문제. 해당 LIS의 길이와 수열을 공백으로 나누어 출력하는 문제. 이분탐색을 이용하여 LIS의 길이를 저장했으며 배열에 각 인덱스의 LIS를 저장하여 해당 값을 비교, 감소하여 수열의 구성요소를 판별하여 풀었다. 자세한 풀이는 주석 참고
```python
from bisect import bisect_left

n = int(input())
l = list(map(int, input().split()))
dp = [0 for _ in range(n)]
cmp = [] # 이분탐색을 위해
maxVal = 0 # 최대값

for i in range(n):
    if i == 0: # 첫 번째일 때 추가만
        cmp.append(l[i])
        continue

    if cmp[-1] < l[i]: # 저장된 값과 비교하여 클 시
        cmp.append(l[i])
        dp[i] = len(cmp) -1
        maxVal = dp[i]
    else:
        # 작을 시 어느 위치의 값에 해당하는 지
        dp[i] = bisect_left(cmp, l[i])
        cmp[dp[i]] = l[i]

# 최대 길이 출력
print(maxVal + 1)

# 인덱스별 길이를 기준으로 수열 저장
res = []
for i in range(n-1, -1, -1):
    if dp[i] == maxVal:
        res.append(l[i])
        maxVal -= 1
res.reverse()

print(*res)

```