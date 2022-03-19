---
title: 'BOJ-6603 - Python'
date: 2020-11-25 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수열을 입력받은 후 그 중 6개를 고를 때 순서가 상관없는 모든 경우의 수를 출력하는 문제. 백트래킹 방법을 이용하여 풀었으며, 방문확인을 해제할 때 자신보다 큰 수들의 방문 확인을 해제하여 풀었다.
```python
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def bt(depth):
    if depth == 6:
        print(*ans)
        return

    for i in range(n):
        if not visit[i]:
            ans.append(l[i])
            visit[i] = True
            bt(depth+1)
            ans.pop()
            for j in range(i+1, n):
                visit[j] = False

while True:
    s = list(map(int, input().split()))
    if s == [0]:
        break
    n = s[0]
    l = s[1:n+1]
    visit = [False for _ in range(n)]
    ans = []
    bt(0)
    print("")

```