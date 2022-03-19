---
title: 'BOJ-1005 - Python'
date: 2021-4-9 12:21:13
category: 'Algorithm'
draft: false
---
N개의 건물과 건설 순서 규칙 K가 주어진다. 이때 건물 번호 X가 건설 완료되는 최소시간을 출력하는 문제. deque와 위상 정렬을 사용하여 풀었다. 진압차수를 줄인 후 반복중인 건물의 최소 시간을 저장하는 answers 배열에 `answers[next] = max(answers[next], answers[now] + answers[next])`의 점화식을 이용하여 풀었다.
```python

import sys
from collections import deque
input = sys.stdin.readline

for _ in range(int(input())):
    N, K = map(int, input().split())

    times = [0] + list(map(int, input().split()))
    answers = [0] + times[1:]

    tree = [[] for _ in range(N+1)]
    indegree = [0 for _ in range(N+1)]
    dp = [0 for _ in range(N+1)]

    for _ in range(K):
        bef, nex = map(int, input().split())
        tree[bef].append(nex)
        indegree[nex] += 1

    q = deque()
    for i in range(1, N+1):
        if indegree[i] == 0:
            q.append(i)
            dp[i] = times[i]

    while q:
        now = q.popleft()

        for next in tree[now]:
            indegree[next] -= 1
            answers[next] = max(answers[next], answers[now] + times[next])
            if indegree[next] == 0:
                q.append(next)

    print(answers[int(input())])Î

```