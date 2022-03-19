---
title: 'BOJ-4781 - Python'
date: 2021-1-19 12:21:13
category: 'Algorithm'
draft: false
---
한가지 물건을 여러 개 고를 수 있는 냅색 문제. TC만큼 물건의 종류 n, 가방의 크기 m이 주어진다. 이 때 m은 소수로, 소수점 둘째자리까지 주어진다. 다음 n개의 줄에는 각 물건의 값, 무게가 주어진다. 무게도 마찬가지로 소수이다. 기본 냅색 문제는 `dp[i-1][j]`, `value + dp[i-1][j-weight]` 위 두가지를 비교하면 되지만 이번 문제는 한가지 물건을 여러 개 고를 수도 있기 때문에 `dp[i][j-weight]` 또한 비교하여야 한다. 입력되는 무게가 소수점 둘째자리까지이기 때문에 100을 곱하여 `int`를 이용하여 형변환하여 풀었으나 시간초과 결과를 받게 되었는데, 이는 `round`로 수정하여 풀었다. 실수형을 형변환할 때 round가 더욱 빠른가보다.
```python
import sys
input = sys.stdin.readline

def solve(n, m, costs, prices):
    m += 1
    ans = [[0 for _ in range(m)] for _ in range(n)]

    for i in range(n):
        cost = costs[i]
        price = prices[i]
        for j in range(m):
            if j < price:
                ans[i][j] = ans[i-1][j]
            else:
                ans[i][j] = max(ans[i-1][j], cost + ans[i][j-price], cost + ans[i - 1][j - price])

    return ans[n-1][m-1]

while True:
    n, m = map(float, input().split())
    if n == 0 and m == 0:
        break
    n = int(n)
    m = round(m * 100)


    costs = []
    prices = []
    for _ in range(n):
        c, p = map(float, input().split())
        c = int(c)
        p = round(p * 100)
        costs.append(c)
        prices.append(p)

    print(solve(n, m, costs, prices))

```