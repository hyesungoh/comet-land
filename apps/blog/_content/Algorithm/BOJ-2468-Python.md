---
title: 'BOJ-2468 - Python'
date: 2020-11-25 12:21:13
category: 'Algorithm'
draft: false
---
1 ~ 100 크기의 정수로 이루어진 n x n 크기의 2차원 배열을 입력받는다. 강수량이 n일 때 n 이하의 지역이 침수된다. 침수되지 않은 상하좌우 기준으로 붙어있는 지역을 한 개의 안전지역이라고 한다. 이 때 임의의 강수량으로 만들어진 안전지역 중 최대 수를 출력하는 문제. 높이의 최대치인 100까지 반복을 수행하며 방문확인 리스트와 높이를 비교하여 dfs 연산을 통해 방문확인하며 안전지역의 수를 세도록 작성하였으며 모든 지역이 잠길 때 반복문을 끝내도록 풀었다.
```python
import sys
input = sys.stdin.readline

dire = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]

def dfs(y, x, i):
    q = [[y, x]]

    while q:
        hy, hx = q.pop()
        visit[hy][hx] = True

        for ny, nx in dire:
            next_y, next_x = ny + hy, nx + hx
            if 0 <= next_y < n and 0 <= next_x < n:
                if graph[next_y][next_x] > i and not visit[next_y][next_x]:
                    q.append([next_y, next_x])


n = int(input())
graph = []

for _ in range(n):
    graph.append(list(map(int, input().split())))

ans = 1
for i in range(1, 101):
    cnt = 0
    visit = [[False for _ in range(n)] for _ in range(n)]
    for y in range(n):
        for x in range(n):
            if graph[y][x] > i and not visit[y][x]:
                dfs(y, x, i)
                cnt += 1
    if cnt == 0:
        break
    if ans <= cnt:
        ans = cnt
print(ans)

```