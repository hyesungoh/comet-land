---
title: 'BOJ-1300 - Python'
date: 2021-3-10 12:21:13
category: 'Algorithm'
draft: false
---
n, n 크기의 A 배열이 있다. A[i][j] = ixj 일 때, 해당 값을 일차원 배열에 넣었을 때 주어지는 수 k번 째 수를 구하는 문제. K번째 수는 K를 넘을 수 없기 때문에 1부터 k까지 이분탐색을 하여 풀었다. mid보다 작거나 같은 숫자들을 전부 찾아 수를 더해줌으로써 해당 수의 위치를 알 수 있다. 이분탐색의 방식은 알겠으나 어떤 문제를 어떻게 이분탐색을 적용시켜야되는 지가 너무 어렵다.
```python
N, K = int(input()), int(input())
start, end = 1, K
while start <= end:
    mid = (start + end) // 2
    temp = 0
    for i in range(1, N+1): temp += min(mid//i, N)
    if temp >= K:
        answer = mid
        end = mid - 1
    else: start = mid + 1
print(answer)

```