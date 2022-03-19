---
title: 'BOJ-1660 - Python'
date: 2021-1-29 12:21:13
category: 'Algorithm'
draft: false
---
1, 4, 10, 20, 35의 순으로 커지는 동전이 있을 시 n원을 나타내는 최소한의 동전의 수를 출력하는 문제. n보다 작은 동전들을 구한 후 최대값으로 dp 배열을 선언 후 dp 배열의 동전 가격 인덱스를 1로 초기화하였다. 그 후 동전의 수와 동전부터 n까지 이중 반복문을 수행하며 `dp[j] = min(dp[j], dp[j - coins[i]] + 1)`의 점화식을 이용하여 풀었다. dp는 계속 풀어도 적응이 안되는 것만 같다.
```python
n = int(input())

coins = []
coin, temp, len_coin = 1, 2, 0
total = 1

while True:
    if total > n:
        break
    coins.append(total)
    coin += temp
    temp += 1
    total += coin

size = len(coins)
dp = [300001 for _ in range(n+1)]
for i in coins:
    dp[i] = 1
dp[0] = 0

for i in range(size):
    for j in range(coins[i], n+1):
        dp[j] = min(dp[j], dp[j - coins[i]] + 1)

print(dp[n])

```