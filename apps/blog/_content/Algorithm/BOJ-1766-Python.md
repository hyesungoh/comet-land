---
title: 'BOJ-1766 - Python'
date: 2021-3-7 12:21:13
category: 'Algorithm'
draft: false
---
숫자가 작을 수록 쉬운 N개의 문제와, 먼저 풀면 쉽게 풀 수 있는 관계 M개가 주어진다. 이 때 모든 문제를 풀어야 하며, 먼저 푸는 것이 좋은 문제가 있는 것은 반드시 먼저 푸는 것이 좋은 문제를 먼저 풀어야하며, 가능하면 쉬운 문제부터 풀어야되는 조건을 지켜 N개의 문제를 풀 순서를 출력하는 문제. 위상정렬 방법을 이용하여 풀었으며, 첫 번째 접근은 deque의 appendleft를 이용하여 선행 문제를 풀었을 때 후행 문제를 바로 풀도록 하였으나 WA를 받게 되었다. 그 후 heap 연산을 이용하여 heappop, heappush를 사용해 풀었다.
```python
import heapq
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
tree = [[] for _ in range(n+1)]
inDegree = [0 for _ in range(n+1)]

for _ in range(m):
    before, after = map(int, input().split())
    tree[before].append(after)
    inDegree[after] += 1

q = []
for i in range(1, n+1):
    if inDegree[i] == 0:
        heapq.heappush(q, i)

ans = []
while q:
    now = heapq.heappop(q)
    ans.append(now)

    for next in tree[now]:
        inDegree[next] -= 1
        if inDegree[next] == 0:
            heapq.heappush(q, next)

print(*ans)

```