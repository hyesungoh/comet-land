---
title: 'BOJ-12738 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
수열 A가 주어졌을 때 가장 긴 증가하는 부분 수열을 구하는 문제. 기존 dp 방법을 이용하여 구하는 것이 아닌, 이분탐색을 사용하여 풀었다. 모든 수에 대해서 dp 배열의 마지막 값과 비교하여 클 시 추가하고 아닐 시 이분탐색을 이용해 가장 인접한 수와 바꿔주어 풀었다.
```python
def lower_bound(start, end, num):
    while start < end:
        mid = (start + end) // 2
        if dp[mid] < num:
            start = mid + 1
        else:
            end = mid
    return end

n = int(input())
l = list(map(int, input().split()))
dp = []

for num in l:
    if len(dp) == 0:
        dp.append(num)
        continue

    if dp[-1] < num:
        dp.append(num)
    else:
        idx = lower_bound(0, len(dp)-1, num)
        dp[idx] = num

print(len(dp))

```