---
title: '프로그래머스-등굣길 - Python'
date: 2021-3-11 12:21:13
category: 'Algorithm'
draft: false
---
m, n 크기의 2차원 배열이 있다. 가장 왼쪽 위의 좌표를 1, 1로 나타내며 방문할 수 없는 물웅덩이가 있는 곳의 좌표들이 주어질 때 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 반환하는 문제. dp 방법으로 풀었으며 1, 1 좌표를 1로 만든 후, 물웅덩이는 배열에 -1로 저장한다. 그 후 반복문을 수행하며 시작 좌표일 때, 배열의 값이 -1일 때 0으로 바꾸고 컨티뉴하며 `dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % 1000000007`다음 점화식을 수행하여 풀었다.
```python
def solution(m, n, puddles):
    dp = [[0 for _ in range(m+1)] for _ in range(n+1)]
    dp[1][1] = 1
    for px, py in puddles:
        dp[py][px] = -1

    for y in range(1, n+1):
        for x in range(1, m+1):
            if y == 1 and x == 1:
                continue
            if dp[y][x] == -1:
                dp[y][x] = 0
                continue

            dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % 1000000007

    return dp[n][m]

```