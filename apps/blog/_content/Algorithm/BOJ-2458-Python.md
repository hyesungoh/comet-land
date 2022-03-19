---
title: 'BOJ-2458 - Python'
date: 2020-11-27 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정점이 있으며 m개의 방향이 있는 간선이 있다. 이 때 모든 정점들과 연결된 정점의 수를 출력하는 문제. 첫번째 풀이는 결과를 저장하는 리스트와 간선을 저장하는 리스트를 이용하여 플로이드 와샬 방법을 이용하여 간선 i,k 와 k,j의 값이 True일 때 결과를 저장하는 리스트를 쌍방향으로 True로 값을 바꿔준 후 리스트의 모든 값이 True인 리스트를 count하여 풀었으나 시간초과 결과와 틀렸습니다 결과를 받게 되었다. 두번째 풀이는 리스트 한개를 이용했으며 플로이드 와샬 방법을 이용하여 ik, kj를 비교 후 ij의 값만 True로 수정해 주었다. 그 후 True인 간선은 i와 j의 값을 추가하여 값을 n과 비교하여 count하여 풀었다.
```python
# import sys
# input = sys.stdin.readline
#
# n, m = map(int, input().split())
# compare = [[False for _ in range(n+1)] for _ in range(n+1)]
# d = [[False for _ in range(n+1)] for _ in range(n+1)]
#
# for _ in range(m):
#     s, e = map(int, input().split())
#     compare[s][e] = True
#     compare[e][s] = True
#     d[s][e] = True
#
# for k in range(1, n+1):
#     compare[k][k] = True
#     for i in range(1, n+1):
#         for j in range(1, n+1):
#             if d[i][k] and d[k][j]:
#                 compare[i][j] = True
#                 compare[j][i] = True
#
# ans = 0
# for i in range(1, n+1):
#     if compare[i][1:n+1].count(False) == 0:
#         ans += 1
# print(ans)

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
compare = [[False for _ in range(n+1)] for _ in range(n+1)]

for _ in range(m):
    s, e = map(int, input().split())
    compare[s][e] = True

for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            if compare[i][k] and compare[k][j]:
                compare[i][j] = True

ans = [0 for _ in range(n+1)]
for i in range(1, n+1):
    for j in range(1, n+1):
        if compare[i][j]:
            ans[i] += 1
            ans[j] += 1

print(ans.count(n-1))

```