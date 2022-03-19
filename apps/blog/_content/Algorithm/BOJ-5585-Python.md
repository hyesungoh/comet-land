---
title: 'BOJ-5585 - Python'
date: 2021-2-14 12:21:13
category: 'Algorithm'
draft: false
---
n원의 물건을 살 때 1000원을 냈다고 한다. 이 때 500, 100, 50, 10, 5, 1원으로 거스름돈의 개수가 최소가 될 떄의 개수를 출력하는 문제. 간단한 그리디 방법을 이용하여 풀었다.
```python
n = 1000 - int(input())
coins = [500, 100, 50, 10, 5, 1]
ans = 0
for coin in coins:
    t = n // coin
    n -= t * coin
    ans += t
print(ans)

```