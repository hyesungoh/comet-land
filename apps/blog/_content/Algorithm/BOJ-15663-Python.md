---
title: 'BOJ-15663 - Python'
date: 2020-11-8 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수를 m개의 수열로 만들어서 출력하되 n개의 수 중에 중복된 수가 있으며, 중복된 수열은 출력하지 않는 조건이 있는 백트래킹 문제. 깊이를 비교하여 출력하며 반복문의 현재 값과 다음 값이 같지 않을 때를 확인하여 풀었다.
```python
def bt(depth):
    if depth == m:
        print(*ans)
        return

    temp = 0
    for i in range(n):
        if not visit[i] and temp != l[i]:
            visit[i] = True
            ans.append(l[i])
            temp = l[i]
            bt(depth+1)
            visit[i] = False
            ans.pop()


n, m = map(int, input().split())
l = sorted(map(int, input().split()))
visit = [False for _ in range(n)]
ans = []
bt(0)

```