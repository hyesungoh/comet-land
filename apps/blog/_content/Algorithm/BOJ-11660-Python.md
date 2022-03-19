---
title: 'BOJ-11660 - Python'
date: 2020-10-27 12:21:13
category: 'Algorithm'
draft: false
---
n과 m을 입력받은 후 n\*n의 크기의 이차원 배열을 입력받는다. 그 후 m번만큼 (y1, x1), (y2, x2)의 합을 구하는 문제. 완전 탐색을 사용하여 풀 경우 시간초과 결과를 받게되어 누적합을 이용하여 풀었다. n을 이용하여 2중 반복문을 수행하며 열마다 누적합 리스트를 만들었다. 그 후 y1-1부터 y2까지 반복하여 정수형 변수 ans에 누적합 결과를 더한 후 출력하여 풀었다. 2차원 누적합을 공부 및 구현할 필요를 느꼈다.
```python
# import sys
# input = sys.stdin.readline
#
# n, m = map(int, input().split())
# l = []
# for _ in range(n):
#     l.append(list(map(int, input().split())))
#
# for _ in range(m):
#     ans = 0
#     y1, x1, y2, x2 = map(int, input().split())
#     for y in range(y1-1, y2):
#         for x in range(x1-1, x2):
#             ans += l[y][x]
#     print(ans)
#
# O(n^2)라 시간초과


import sys
input = sys.stdin.readline

n, m = map(int, input().split())
l = []
l_add = [[0] for _ in range(n)]

# 2차원 배열 입력
for _ in range(n): l.append(list(map(int, input().split())))

# 누적합 계산
for i in range(n):
    for j in range(n):
        l_add[i].append(l_add[i][-1] + l[i][j])

for _ in range(m):
    y1, x1, y2, x2 = map(int, input().split())
    ans = 0
    for i in range(y1-1, y2):
        ans += l_add[i][x2] if x1 == 1 else l_add[i][x2] - l_add[i][x1-1]

    print(ans)

```