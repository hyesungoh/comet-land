---
title: 'BOJ-2252 - Python'
date: 2021-3-6 12:21:13
category: 'Algorithm'
draft: false
---
n명의 학생들을 키 순서대로 줄을 세울 때, 두 학생의 키를 비교하여 세울려고 한다. 일부 학생들의 키를 비교한 결과가 주어졌을 때 해당 결과를 출력하는 문제. 위상정렬을 이용하여 풀었다. 위상정렬이란 방향성을 가지는 그래프인 유향 그래프이자 사이클이 없는 그래프에서 사용할 수 있다. 진입차수 그리고 스택나 큐를 이용하여 구현할 수 있는데 해당 문제에서는 큐를 이용하여 구현하였다. 입력되는 비교 결과를 이용해 인접 리스트 형태의 그래프를 구현, 진입차수를 저장하였다. 진입차수가 0인 (제익 작은) 학생을 기준으로 q를 형성, popleft한 후 해당 학생보다 큰 학생들의 진입차수를 감소, 진입차수가 0이 되었을 때 q에 추가하여 풀었다.
```python
from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
tree = [[] for _ in range(n+1)] # 트리
indegree = [0 for _ in range(n+1)] # 진입차수

for _ in range(m):
    small, big = map(int, input().split())
    tree[small].append(big)
    indegree[big] += 1 # 진입차수 추가

q = deque()
ans = [] # 정답

for i in range(1, n+1):
    if indegree[i] == 0: # 진입차수가 0인 (제일 작은) 정점 추가
        q.append(i)

while q:
    now = q.popleft()
    ans.append(now)
    for next in tree[now]: # 현재 노드보다 큰 정점들
        indegree[next] -= 1 # 해동 노드의 진입차수를 줄임
        if indegree[next] == 0: # 줄였을 때 0일 시, 큐에 추가
            q.append(next)

print(*ans)

```