---
title: 'BOJ-11066 - Python'
date: 2021-4-10 12:21:13
category: 'Algorithm'
draft: false
---
N개의 파일이 있을 때 두 개의 파일을 합쳐서 하나의 임시파일을 만들고, 이 임시파일이나 원래의 파일을 계속 두 개씩 합쳐서 소설의 여러 장들이 연속이 되도록 파일을 합쳐나가고, 최종적으로는 하나의 파일로 합친다. 두 개의 파일을 합칠 때 필요한 비용이 두 파일 크기의 합이라고 가정할 때, 최종적인 한 개의 파일을 완성하는데 필요한 비용 중 최소 총합을 계산하는 문제. 크누스(knuth) 알고리즘을 이용하여 풀었다곤 하지만 아직 정확하게 이해하지 못했다. 누적합을 계산하여 연산에 이용, `dp[2][4]는 dp[2][3] + sizes[4], dp[3][4] + sizes[2]` 중 작은 것을 할당하는 점화식이 이용돼었다. 아직 너무 부족하다.
```python
import sys
input = sys.stdin.readline
INF = sys.maxsize

for _ in range(int(input())):
    N = int(input())
    sizes = list(map(int, input().split()))

    dp = [[0 for _ in range(N)] for _ in range(N)]
    acc_sum = [0]
    for size in sizes: acc_sum.append(acc_sum[-1] + size)

    for d in range(1, N):
        for i in range(N-d):
            j = d + i
            dp[i][j] = INF
            for k in range(i, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + acc_sum[j+1] - acc_sum[i])

    print(dp[0][N-1])

```