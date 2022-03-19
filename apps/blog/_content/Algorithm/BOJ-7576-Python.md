---
title: 'BOJ-7576 - Python'
date: 2020-09-10 12:21:13
category: 'Algorithm'
draft: false
---
n, m 크기를 가진 2차원 배열을 입력받는다. 1은 익은 토마토, 0은 안익은 토마토, -1은 벽을 뜻한다. 익은 토마토는 하루에 상하좌우 안익은 토마토를 익게할 수 있는데 이 때 모든 토마토들이 익는 날짜를 출력하는 문제. 이미 모든 토마토들이 익은 상태일 때는 0을, 모튼 토마토들이 익을 수 없을 땐 -1을 출력하는 문제. 방문여부와 거리날짜를 확인할 2차원 리스트 check와 dist를 사용했다. 입력간에 1이 아예 없을 때를 확인하여 -1을 출력한 후 실행을 종료할 isnone 변수도 사용하였다. 추가적으로 입력간에 1일 때를 확인하여 큐에 추가, check와 dist를 True와 0으로 변환하였다. 그 후 큐를 이용하여 상하좌우 check가 false이며 그래프의 값이 0인 요소를 찾아 1로 바꾸었다. dist는 현재 큐의 값에 1을 더하였다. 문제의 정답을 위해 2중 반복문을 수행하여 그래프에 0이 있을 때 -1을 출력한 후 실행을 종료, 제일 큰 dist의 값을 day에 저장하여 출력하여 풀었다.
```python
from collections import deque
que = deque()

n, m = map(int, input().split())

graph = []
check = [[False] * n for _ in range(m)]
dist = [[0] * n for _ in range(m)]
isnone = True

for y in range(m):
    graph.append(list(map(int, input().split())))
    for x in range(n):
        if graph[y][x] == 1:
            que.append((y, x))
            check[y][x] = True
            dist[y][x] = 0
            isnone = False

if isnone == True:
    print(-1)
    exit(0)

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

while que:
    i, j = que.popleft()

    for temp in range(4):
        x = dx[temp] + i
        y = dy[temp] + j
        if 0 <= y < n and 0 <= x < m:
            if check[x][y] == False and graph[x][y] == 0:
                que.append((x, y))
                dist[x][y] = dist[i][j] + 1
                check[x][y] = True
                graph[x][y] = 1

day = 0
for y in range(m):
    for x in range(n):
        if graph[y][x] == 0:
            print(-1)
            exit(0)
        if dist[y][x] > day:
            day = dist[y][x]
print(day)

```