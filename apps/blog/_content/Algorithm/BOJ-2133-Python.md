---
title: 'BOJ-2133 - Python'
date: 2021-1-10 12:21:13
category: 'Algorithm'
draft: false
---
3xN의 크기를 갖는 배열에 2x1, 1x2 크기의 타일로 채우는 경우의 수를 출력하는 문제. 해당 문제는 홀수 일 때는 경우의 수가 0이 되며 짝수만 경우의 수를 갖는다. 2와 4의 경우의 수를 판단 시 각 3, 11이 되게 되는데 이를 통해 dp[n] = dp[n-2] + 2의 경우의 수를 갖는 다는 것을 알게 되었다. 더 큰 짝수들은 더해지는 값들이 2와 더불어 -4의 경우의 수와 x2를 해준 값을 더해야 함으로 dp[0]의 값을 1로 설정 후 반복문을 0부터 i-4의 값까지 x2하여 더해주어 풀었다.
```python
# def solve(n):
#     dp = [0 for _ in range(31)]
#     dp[0], dp[2] = 1, 3
#     for i in range(4, n+1, 2):
#         dp[i] = dp[i-2] * 3
#         for j in range(i-4, -1, -2):
#             dp[i] += dp[j] * 2
#
#     return dp[n]
#
# n = int(input())
# print(solve(n))

def solve(n):
    dp = [0 for _ in range(31)]
    dp[0], dp[2] = 1, 3

    for i in range(4, n+1, 2):
        dp[i] = dp[i-2] * 3
        for j in range(0, i-3, 2):
            dp[i] += dp[j] * 2
    return dp[n]

n = int(input())
print(solve(n))

```