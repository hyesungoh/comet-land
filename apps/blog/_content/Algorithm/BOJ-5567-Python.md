---
title: 'BOJ-5567 - Python'
date: 2020-09-06 12:21:13
category: 'Algorithm'
draft: false
---
정해진 수만큼의 x y와 같이 연결된 정점이 입력된다. 정점 1과 연결된 정점들의 정점까지 갯수를 출력해야 한다. 정점 1과 연결된 정점이 2와 3이면 정점 2, 3을 포함한 2, 3 정점과 연결된 정점의 수를 출력하는 문제. 입력되는 수를 바탕으로 양방향 그래프를 만든 후, extend를 사용하여 1과 연결된 정점들을 리스트 que에, 중복을 제거하기 위해 집합 자료형 visit에 graph[1]을 넣었다. que에 든 정점 1과 연결된 정점 i를 사용하여 반복문을 수행하며 그 안에 graph[i]를 기준으로 반복문을 수행하며 안의 값을 집합 자료형 visit에 넣었다. 정답은 1을 제외해야하기 때문에 len(visit) - 1을 하여 풀었다.
```python
def bfs():
    que = []
    visit = set(graph[1])
    que.extend(graph[1])
    for i in que:
        for j in graph[i]:
            visit.add(j)
    return visit

input()
n = int(input())
graph = {}
for _ in range(n):
    x, y = map(int, input().split())
    if x in graph:
        graph[x].append(y)
    else:
        graph[x] = [y]
    if y in graph:
        graph[y].append(x)
    else:
        graph[y] = [x]

print(len(bfs())-1)

```