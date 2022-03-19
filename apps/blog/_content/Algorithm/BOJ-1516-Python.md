---
title: 'BOJ-1516 - Python'
date: 2021-3-8 12:21:13
category: 'Algorithm'
draft: false
---
n개의 건물을 짓는다. 이 때 어떤 건물은 짓기 위해서 다른 건물을 먼저 지어야 할 수도 있다. 이 때 각 건물마다 짓는데 걸리는 최소시간을 출력하는 문제. deque를 사용한 위상정렬 방법을 이용해 풀었다. 진입차수를 줄이는 과정해서 현재 선수 건물과 현재 건물의 값을 더한 것과 저번 선수 건물과 더한 값 혹은 자신의 값을 비교해 큰 것을 할당하는 점화식 `answer[next] = max(answer[next], answer[now] + times[next])`을 사용하여 풀었다
```python
from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
tree = [[] for _ in range(n+1)]
times = [0 for _ in range(n+1)]
answer = [0 for _ in range(n+1)]
inDegree = [0 for _ in range(n+1)]

for i in range(1, n+1):
    inputs = list(map(int, input().split()))
    times[i] = inputs[0]
    answer[i] = inputs[0]

    if inputs[1] == -1:
        continue
    for before in inputs[1:]:
        if before == -1: break
        tree[before].append(i)
        inDegree[i] += 1

q = deque()
for i in range(1, n+1):
    if inDegree[i] == 0:
        q.append(i)

while q:
    now = q.popleft()
    for next in tree[now]:
        inDegree[next] -= 1
        answer[next] = max(answer[next], answer[now] + times[next])
        if inDegree[next] == 0:
            q.append(next)

[print(ans) for ans in answer[1:]]

```