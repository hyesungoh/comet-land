---
title: 'BOJ-1535 - Python'
date: 2021-1-18 12:21:13
category: 'Algorithm'
draft: false
---
n개의 값과 무게를 입력받은 후 가방의 크기가 99일 때 최대 값을 출력하는 문제. 이중 반복문을 이용하여 담을 수 없을 때 같은 무게, 저번 물건의 값을 할당, 담을 수 있을 때 같은 무게, 저번 물건의 값과 현재 물건의 값 + 반복중인 무게 - 현재 물건의 무게의 저번 물건의 값 중 큰 것을 할당하여 배열의 마지막 값을 출력하여 풀었다. n이 1이며 해당 무게가 99를 넘는 경우를 예외처리하지 못하여 여러번 틀린 문제.
```python
def solve(n):
    weight = list(map(int, input().split()))
    value = list(map(int, input().split()))
    ans = [[0 for _ in range(100)] for _ in range(n)]

    if n == 0:
        return 0
    if n == 1:
        return value[0] if weight[0] <= 99 else 0

    for v in range(n):
        for w in range(100):
            val = value[v]
            cost = weight[v]
            if w < cost:
                ans[v][w] = ans[v - 1][w]
            else:
                ans[v][w] = max(ans[v - 1][w], val + ans[v - 1][w - cost])

    return ans[n - 1][99]

n = int(input())
print(solve(n))

```