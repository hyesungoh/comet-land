---
title: 'BOJ-10974 - Python'
date: 2021-2-27 12:21:13
category: 'Algorithm'
draft: false
---
n이 주어졌을 때, 1부터 n까지의 수로 이루어진 순열을 사전순으로 출력하는 문제. 정수를 저장하는 배열과 방문확인을 위한 배열을 이용한 백트래킹 방법을 이용하여 풀었다.
```python
def bt(depth):
    if depth == n:
        print(*nl)
        return

    for i in range(1, n+1):
        if not visit[i]:
            visit[i] = True
            nl.append(i)

            bt(depth+1)

            visit[i] = False
            nl.pop()

n = int(input())
nl = []
visit = [False for _ in range(n+1)]
bt(0)

```