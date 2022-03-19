---
title: 'BOJ-1106 - Python'
date: 2021-1-16 12:21:13
category: 'Algorithm'
draft: false
---
광고의 비용과 광고로 인해 늘어나는 고객의 수가 n개 주어진다고 한다. 적어도 c명의 고객의 수를 늘리기 위해서 투자해야되는 최소한의 비용을 출력하는 문제. 첫 번째 풀이는 dp[비용]에 최대한 구할 수 있는 사람의 수를 저장한 후 최초로 c가 넘는 값을 출력하여 풀었다. 이 방법은 최대 비용 1000 \* 100까지 비교를 수행해야 하므로 두 번째 풀이는 dp[고객의 수]에 최소한의 비용울 저장하여 풀었다. 가격과 고객의 수를 입력받은 후, 고객의 수부터 최대 고객의 수인 1100까지 반복을 수행하였다. 해당 인자 j를 이용하여 `dp[j] = min(dp[j], dp[j-customer] + cost)`의 점화식을 사용하여 풀었다.
```python
# MAX = 1000 * 100 + 1
#
# c, n = map(int, input().split())
# # dp[비용] = 최대한 구할 수 있는 사람의 수
# dp = [0 for _ in range(MAX)]
#
# cost = [0 for _ in range(n)]
# customer = [0 for _ in range(n)]
# for i in range(n):
#     cost[i], customer[i] = map(int, input().split())
#
# for i in range(n):
#     for j in range(cost[i], MAX):
#         dp[j] = max(dp[j], dp[j-cost[i]] + customer[i])
#
# for i in range(MAX):
#     if dp[i] >= c:
#         print(i)
#         exit(0)


# 최대 1000명, 홍보 최대 비용 100
MAX_COST = 1000 * 100 + 1
MAX_CUSTOMER = 1000 + 100 + 1

c, n = map(int, input().split())
# dp[사람의 수] = 최소한의 비용
# 최대 인원 + 홍보 최대 인원 100명까지 비교하면 됨
dp = [MAX_COST for _ in range(MAX_CUSTOMER)]
dp[0] = 0

for i in range(n):
    cost, customer = map(int, input().split())
    for j in range(customer, MAX_CUSTOMER):
        dp[j] = min(dp[j], dp[j-customer] + cost)

print(min(dp[c:-1]))

```