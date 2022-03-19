---
title: 'BOJ-2749 - Python'
date: 2021-2-1 12:21:13
category: 'Algorithm'
draft: false
---
1,000,000,000,000,000,000보다 작거나 같은 n이 주어질 때, n 번째 피보나치 수를 출력하는 문제. 첫 번째 풀이는 단순 DP 방법을 이용하여 풀었으나 당연하게도 메모리 초과 결과를 받게 되었다. 피보나치 수를 나눈 수는 주기를 갖는 특징, 피사노 주기를 계산하여 해당 값을 이용하여 피보나치 수를 계산, 해당 값을 출력하여 풀었다.
```python
# n = int(input())
# dp = [0 for _ in range(n+1)]
# dp[1] = 1
#
# for i in range(2, n+1):
#     dp[i] = (dp[i-1] + dp[i-2]) % 1000000
# print(dp[i] % 1000000)


DIV = 1000000

def solve(n):
    n1, n2 = 0, 1
    for _ in range(n):
        n1, n2 = n2 % DIV, (n1 + n2) % DIV
    return n1

n = int(input())
print(solve(n%(15*(10**5))))

```