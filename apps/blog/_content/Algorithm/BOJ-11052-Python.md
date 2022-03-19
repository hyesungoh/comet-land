---
title: 'BOJ-11052 - Python'
date: 2020-11-23 12:21:13
category: 'Algorithm'
draft: false
---
n장의 카드를 사야할 때, 1장부터 n장까지 카드가 들어있는 카드팩의 가격이 주어진다. 이 때 n장의 카드를 사는 최대한 비싼 가격을 출력하는 문제. 첫 풀이는 1부터 10까지 반복을 수행하여 가격이 저장된 리스트 l을 이용해 `((n // i) * l[i]) + l[n % i]`을 이용하여 제일 큰 값을 출력했지만 풀이에 작성된 반례로 인해 틀리게 되었다. 이후 다이내믹 프로그래밍을 이용하여 2부터 n까지 반복을 수행하며 1부터 i를 2로 나눈 값까지 반복을 수행하며 `max(l[i], dp[i], dp[j] + dp[i-j])`의 점화식을 사용하여 모든 장 수의 최대 값을 이용하여 풀었다.
```python
# n = int(input())
# l = [0] + list(map(int, input().split()))
# max = 0
#
# for i in range(1, n+1):
#     cost = ((n // i) * l[i]) + l[n % i]
#     if max < cost:
#         max = cost
# print(max)
#
# 10
# 1 100 160 1 1 1 1 1 1 1
# 위 반례에서 실패

n = int(input())
l = [0] + list(map(int, input().split()))
dp = [0 for _ in range(n+1)]

dp[1] = l[1]
for i in range(2, n+1):
    for j in range(1, (i//2) + 1):
        dp[i] = max(l[i], dp[i], dp[j] + dp[i-j])
print(dp[n])

```