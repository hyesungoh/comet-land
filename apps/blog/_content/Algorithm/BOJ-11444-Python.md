---
title: 'BOJ-11444 - Python'
date: 2021-6-28 12:21:13
category: 'Algorithm'
draft: false
---
최대 10경 번째 피보나치 수를 구하는 문제. 첫 번째 풀이는 두 개의 변수에 값을 할당하는 방식으로 풀었으나 당연하게도 시간초과 결과를 받게 되었다. 검색하여 알아본 결과 매우 매우 큰 수의 피보나치를 빠르게 구하는 방법은 [행렬의 거듭제곱](https://ataraxiady.github.io/dev/2021/04/15/dev-boj-2_11444/)을 사용한다고 한다. 위 링크의 게시물을 참고하여 풀었으나 아직 많이 부족하다.
```python
# n = int(input())
# x, y = 0, 1
# for _ in range(n):
#     x, y = y, (x+y) % 1000000007
# print(x)


def power(adj, n):
    if n == 1: return adj
    elif n % 2: return multi(power(adj, n-1), adj)
    else: return power(multi(adj, adj), n // 2)


def multi(a, b):
    temp = [[0] * len(b[0]) for _ in range(2)]
    for i in range(2):
        for j in range(len(b[0])):
            sum_n = 0
            for k in range(2):
                sum_n += a[i][k] * b[k][j]
            temp[i][j] = sum_n % MOD

    return temp


MOD = 1000000007
adj = [[1, 1], [1, 0]]
start = [[1], [1]]
N = int(input())

print(1 if N < 3 else multi(power(adj, N-2), start)[0][0])

```