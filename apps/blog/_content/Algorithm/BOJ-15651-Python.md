---
title: 'BOJ-15651 - Python'
date: 2020-10-15 12:21:13
category: 'Algorithm'
draft: false
---
자연수 n, m이 입력될 때 1부터 n까지 자연수 중에서 m개를 고른 수열을 같은 수를 여러 번 골라도 되는 조건하에 출력하는 문제. 이전 백트래킹 문제과 같이 길이를 비교하여 출력 및 종료, 배열에 추가, 재귀적으로 호출, 배열 pop을 동일하게 사용하여 풀었으며 같은 수를 여러 번 골라도 되기에 방문 확인을 빼서 풀었다.
```python
n, m = map(int, input().split())
l = list(range(1, n+1))
ans = []

def bt(depth):
    if depth == m:
        print(*ans)
        return

    for i in range(n):
        ans.append(l[i])
        bt(depth+1)
        ans.pop()
bt(0)

```