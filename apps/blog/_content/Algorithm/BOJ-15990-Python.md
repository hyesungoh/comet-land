---
title: 'BOJ-15990 - Python'
date: 2021-1-16 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 같은 숫자가 연속해서 나오면 안된다는 규칙을 지키며 1, 2, 3의 더하기로 나타낼 때, 방법의 수를 출력하는 문제. i번째 수는 i-1번째 공식에서 1로 시작하지 않는 방법에 1을 더하며, i-2번째 공식에서 2로 시작하지 않는 방법에 2를 더하며, i-3번째 공식에서 3으로 시작하지 않는 방법에 3을 더하는 식으로 2차원 배열을 만들어 풀었다.
```python
import sys
input = sys.stdin.readline

dp = [[0 for _ in range(4)] for _ in range(100001)]
dp[0] = [0, 0, 0, 0]
dp[1] = [0, 1, 0, 0]
dp[2] = [0, 0, 1, 0]
dp[3] = [0, 1, 1, 1]

for i in range(4, 100001):
    dp[i][1] = (dp[i-1][2] + dp[i-1][3]) % 1000000009
    dp[i][2] = (dp[i-2][1] + dp[i-2][3]) % 1000000009
    dp[i][3] = (dp[i-3][1] + dp[i-3][2]) % 1000000009

l = []
[l.append(int(input())) for _ in range(int(input()))]
[print(sum(dp[i]) % 1000000009) for i in l]

```