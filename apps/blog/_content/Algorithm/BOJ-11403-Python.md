---
title: 'BOJ-11403 - Python'
date: 2020-11-23 12:21:13
category: 'Algorithm'
draft: false
---
방향 없는 그래프가 i번째 줄에 입력된 0과 1로 구분지어 갈 수 있는 정점을 판달할 때 각 정점별로 갈 수 있는 정점은 1, 없는 정점은 0으로 구분지어 출력하는 문제. dfs 연산을 통해 방문확인 리스트를 반환하는 함수를 이용하여 풀었다.
```python
def dfs(start):
    q = [start]
    v = [0 for _ in range(n)]

    while q:
        here = q.pop()
        for i in range(n):
            if graph[here][i] == 1 and v[i] == 0:
                v[i] = 1
                q.append(i)
    return v


n = int(input())
graph = [[] for _ in range(n)]
visit = []
for i in range(n):
    graph[i] = list(map(int, input().split()))

for i in range(n):
    temp = dfs(i)
    visit.append(temp)

[print(*i) for i in visit]

```