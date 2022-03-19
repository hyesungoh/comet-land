---
title: 'BOJ-1043 - Python'
date: 2021-2-28 12:21:13
category: 'Algorithm'
draft: false
---
사람의 수 n, 파티의 수 m이 주어진다. 그리고 진실을 아는 사람의 수와 번호가 주어지고. m개의 줄만큼 파티에 오는 사람의 수와 번호가 주어진다. 파티에서 진실을 아는 사람이 없으며, 진실을 아는 사람과 같이 파티를 한 사람이 없는 파티의 수를 출력하는 문제. 유니온 파인드 방식을 이용하여 풀었으며 모든 파티에 오는 사람들을 union하였다. 진실을 아는 사람을 저장하는 배열을 관리하여 union시 부모노드들의 값을 관리하여 풀었다.
```python
import sys
input = sys.stdin.readline

def find(node):
    if parents[node] == node:
        return node

    p = find(parents[node])
    parents[node] = p
    return p

def union(a, b):
    pa, pb = find(a), find(b)
    if pa != pb:
        if know[pa] or know[pb]:
            know[pa], know[pb] = True, True

        if pb < pa:
            parents[pa] = pb
        else:
            parents[pb] = pa

n, m = map(int, input().split())
parents = [i for i in range(n+1)]
know = [False for i in range(n+1)]
party = []
ans = 0

know_input = list(map(int, input().split()))
for t in know_input[1:]:
    know[t] = True


for _ in range(m):
    p = list(map(int, input().split()))
    party.append(p)

    for i in range(1, p[0]):
        union(p[i], p[i+1])

for i in range(m):
    member = party[i][0]
    for j in range(1, member+1):
        pj = find(party[i][j])
        if know[pj]: break
        if not know[pj] and j == member: ans += 1

print(ans)

```