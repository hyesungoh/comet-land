---
title: 'BOJ-2644 - Python'
date: 2020-12-13 12:21:13
category: 'Algorithm'
draft: false
---
여러 사람들의 부모 자식 관계가 주어질 때, ans_x와 ans_y의 관계가 몇 촌인지 출력하는 문제. ans_x부터 dfs 연산을 이용하여 queue에 촌 수를 저장하여 풀었다.
```python
def dfs(start, end):
    q = [[start, 0]]
    while q:
        node, cnt = q.pop()
        visit[node] = True

        if node == end:
            return cnt

        for next in graph[node]:
            if not visit[next]:
                q.append([next, cnt+1])
    return -1

n = int(input())
ans_x, ans_y = map(int, input().split())
m = int(input())

graph = [[] for _ in range(n+1)]
visit = [False for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

ans = dfs(ans_x, ans_y)
print(ans)

```