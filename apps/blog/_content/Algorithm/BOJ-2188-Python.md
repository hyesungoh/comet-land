---
title: 'BOJ-2188 - Python'
date: 2021-4-21 12:21:13
category: 'Algorithm'
draft: false
---
N마리의 소, M개의 축사가 있는 이분매칭 문제, 11375번 문제와 동일한 구성이여서 반복숙달겸 풀었다.
```python
import sys
input = sys.stdin.readline

def dfs(start):
    if visit[start] == 1: return 0

    visit[start] = 1
    for i in S[start]:
        if E[i] == 0 or dfs(E[i]):
            E[i] = start
            return 1
    return 0

N, M = map(int, input().split())
S = [[] for _ in range(N+1)]
E = [0 for _ in range(M+1)]
ans = 0

for i in range(1, N+1):
    temp = list(map(int, input().split()))
    S[i].extend(temp[1:])

for i in range(1, N+1):
    visit = [0 for _ in range(N+1)]
    if dfs(i): ans += 1

print(ans)
```