---
title: 'BOJ-16562 - Python'
date: 2021-3-2 12:21:13
category: 'Algorithm'
draft: false
---
n명의 친구와 m개의 친구 관계도, k원이 있을 때 모든 친구들을 살 수 있는 최소 금액을 출력하며 살 수 없을 시 문자열을 출력하는 문제. 유니온 파인드 방법을 이용하여 풀었다. union 연산 시에 입력받는 친구의 가격을 비교하여 값이 작은 친구를 부모로 저장하였다. 그 후 모든 친구들의 부모를 set 자료형에 담은 후 해당 친구들의 값을 더하여 비교 후 출력하여 풀었다.
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
        if pay[pa] < pay[pb]:
            parents[pb] = pa
        else:
            parents[pa] = pb

n, m, k = map(int, input().split())
pay = [0] + list(map(int, input().split()))
parents = [i for i in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    union(a, b)

set_parents = set()
for i in range(1, n+1):
    set_parents.add(find(i))

ans = sum(map(lambda x: pay[x], set_parents))
print(ans if ans <= k else "Oh no")

```