---
title: 'BOJ-1915 - Python'
date: 2021-3-3 12:21:13
category: 'Algorithm'
draft: false
---
n, m의 크기 0, 1로 된 배열이 있다. 이 배열에서 1로 된 가장 큰 정사각형의 크기를 출력하는 문제. 1, 1 좌표부터 n, m까지 반복문을 수행하며 해당 좌표의 값이 1일 시, 왼쪽, 위쪽, 대각선 왼쪽 위와 값을 비교하여 제일 작은 값 + 1을 저장하였다. 저장된 값 중 제일 큰 것을 서로 곱한 후 출력하여 풀었다.
```python
Y, X = map(int, input().split())
graph = [[] for _ in range(Y)]
for i in range(Y): graph[i] = list(map(int, input()))
ans = 0 if graph[0][0] == 0 else 1

for y in range(1, Y):
    for x in range(1, X):
        if graph[y][x] != 1:
            continue
        min_value = min(graph[y-1][x], graph[y][x-1], graph[y-1][x-1])
        graph[y][x] = min_value + 1
        ans = max(ans, graph[y][x])

print(ans*ans)

```