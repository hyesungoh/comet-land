---
title: 'BOJ-11375 - Python'
date: 2021-4-21 12:21:13
category: 'Algorithm'
draft: false
---
N명의 있고 M개의 해야할 일이 있으며 직원은 1번부터 N번까지, 일은 1번부터 M번까지 번호가 매겨 있다. 각 직원은 한 개의 일만 할 수 있고, 각각의 일을 담당하는 사람은 1명이어야 한다. 각각의 직원이 할 수 있는 일의 목록이 주어졌을 때, M개의 일 중에서 최대 몇 개를 할 수 있는 지 구하는 문제. 이분매칭 문제이다. 해당 [게시물](https://blog.naver.com/kks227/220807541506)을 통해 공부했으며, 작성 난이도는 어렵지 않았지만 깊은 이해까지는 시간이 걸릴 것 같다. 언제나 처럼 반복숙달 해야겠다.
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
    t = list(map(int, input().split()))
    S[i].extend(t[1:])

for i in range(1, N+1):
    visit = [0 for _ in range(N+1)]
    if dfs(i): ans += 1

print(ans)
```