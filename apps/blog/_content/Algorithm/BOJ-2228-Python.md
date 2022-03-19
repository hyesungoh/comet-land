---
title: 'BOJ-2228 - Python'
date: 2021-2-23 12:21:13
category: 'Algorithm'
draft: false
---
N개의 수로 이루어진 1차원 배열이 있다. 이 배열에서 M개의 구간을 선택해서 구간에 속한 수들의 총 합이 최대가 되도록 할 때, 각 구간은 한 개 이상의 수가 있어야하며, 구간끼리 겹치거나 인접해 있어선 안되며, 정확히 M개의 구간이 있어야할 때 최대값을 출력하는 문제. 첫번 째 풀이는 인접하면 안되는 조건을 보지 못하여 단순 반복문을 이용한 다이내믹 프로그래밍 방벙을 이용하였다. 두 번째 풀이는 구역별로 최대값을 저장하는 이차원배열을 이용하는 방법을 작성하였다. [해당 게시물](https://blog.naver.com/PostView.nhn?blogId=hands731&logNo=221927641787&categoryNo=14&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)을 참고하여 작성하였으며, dp1에는 선택을 하지 않는 경우의 수 중 제일 큰 값을, dp2에는 선택을 하는 경우에서 제일 큰 값을 저장한다. 구간이 인접하지 않아야하는 조건때문에 `dp2[i][j] = max(dp1[i-1][j-1] + l[i], dp2[i-1][j] + l[i])`의 점화식을 사용하는 것 같은데, 정확한 풀이는 아직 모르곘다. 나중에 다시 풀어봐야겠다.
```python
import sys
INF = -sys.maxsize
input = sys.stdin.readline

n, m = map(int, input().split())
l = [int(input()) for _ in range(n)]
dp1 = [[INF for _ in range(m+1)] for _ in range(n)]
dp2 = [[INF for _ in range(m+1)] for _ in range(n)]

dp1[0][0] = 0
dp2[0][1] = l[0]

for i in range(1, n):
    dp1[i][0] = 0
    dp2[i][0] = INF

    for j in range(1, min(m, (i+2) // 2) + 1):
        dp1[i][j] = max(dp1[i-1][j], dp2[i-1][j])
        dp2[i][j] = max(dp1[i-1][j-1] + l[i], dp2[i-1][j] + l[i])

print(max(dp1[n-1][m], dp2[n-1][m]))

```