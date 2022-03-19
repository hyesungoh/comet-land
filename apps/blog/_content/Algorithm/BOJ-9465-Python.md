---
title: 'BOJ-9465 - Python'
date: 2020-10-18 12:21:13
category: 'Algorithm'
draft: false
---
자연수로 이루어진 2행 n열의 배열이 주어질 때 상하좌우의 값은 더하지 못하는 조건하에 더한 최대 값을 출력하는 문제. 인덱스 1의 값은 왼쪽 대각선의 값을 더한 후, 인덱스 2부터 n-1까지 왼쪽 대각선 값과 그 왼쪽의 값을 비교해 더 큰 값을 해당 인덱스의 값과 더한 것을 저장했다. n-1의 상하 값 중에 큰 것을 비교하여 출력해 풀었다.
```python
import sys
input = sys.stdin.readline

for _ in range(int(input())):
    n = int(input()); l = []
    l.append(list(map(int, input().split())))
    l.append(list(map(int, input().split())))
    l[0][1] += l[1][0] # 두번째 값에 왼쪽 대각선 값을 더함
    l[1][1] += l[0][0]
    for i in range(2, n): # 두번째부터 배열의 n번째까지
        l[0][i] += max(l[1][i-1], l[1][i-2]) # 왼쪽 대각선값과 그 왼쪽의 값의 크기를 비교해서 큰 것을 더
        l[1][i] += max(l[0][i-1], l[0][i-2])
    print(max(l[0][n-1], l[1][n-1])) # 배열의 마지막 값 중 큰 것을 출력

```