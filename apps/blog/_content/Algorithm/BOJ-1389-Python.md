---
title: 'BOJ-1389 - Python'
date: 2021-1-1 12:21:13
category: 'Algorithm'
draft: false
---
n명과 m개의 관계를 입력받은 후. 모든 사람을 기준으로 임의의 두 사람이 최소 몇 단계 만에 이어질 수 있는지 계산한 총합을 계산하여 그 값, 케빈 베이컨의 수가 가장 적은 사람을 출력하는 문제. n+1, n+1의 크기의 이차원 배열을 INF 값으로 만든 후 입력되는 관계를 쌍방향으로 1로 저장, 플로이드 와샬 방법을 사용하여 `graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])`의 점화식을 사용하여 풀었다.
```python
import sys
input = sys.stdin.readline
INF = sys.maxsize

n, m = map(int, input().split())
graph = [[INF for _ in range(n+1)] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1
    graph[b][a] = 1

for k in range(1, n+1):
    graph[k][k] = 0
    for i in range(1, n+1):
        for j in range(1, n+1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

dist = list(map(lambda x: sum(x) - INF, graph))
MIN = INF
ans = 0
for i in range(1, n+1):
    if MIN > dist[i]:
        MIN = dist[i]
        ans = i
print(ans)

```