---
title: 'BOJ-1788 - Python'
date: 2021-2-17 12:21:13
category: 'Algorithm'
draft: false
---
피보나치 수를 음수일 경우까지 확장한 문제. n <= 1일 때고 f(n) = f(n-1) + f(n-2)가 성립되도록 확장한다. n이 주어진 후 해당 피보나치수가 양수일 때 1, 음수일 때 -1, 0일 때 0을 출력한 후, 해당 피보나치수의 절댓값을 출력하는 문제. 절댓값을 출력하는 부분에서 음수와 양수의 값이 다르지 않다는 것을 유추하게 되었다. 첫 접근은 -1보다 작은 수들을 -1로 출력한 후 최대 크기만큼 연산 후 절댓값 n의 피보나치 수를 출력하여 풀었으나, n이 홀수일 때는 양수가 나오게 되어 WA 결과를 받게되었다. 조건문에 해당 조건을 추가한 후 나머지 연산은 그대로 이용하여 풀었다.
```python
n = int(input())
size = 1000001

if n == 0:
    print("0\n0")
    exit(0)
print(-1) if n % 2 == 0 and n < 0 else print(1)

n = abs(n)

dp = [0 for _ in range(size)]
dp[1] = 1
for i in range(2, size): dp[i] = (dp[i-1] + dp[i-2]) % 1000000000
print(dp[n])

```