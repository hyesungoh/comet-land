---
title: 'BOJ-15652 - Python'
date: 2020-10-17 12:21:13
category: 'Algorithm'
draft: false
---
자연수 n, m이 입력된 후 '1부터 N까지 자연수 중에서 M개를 고른 수열', '같은 수를 여러 번 골라도 된다', '고른 수열은 비내림차순이어야 한다'. 위 세 조건을 만족시키는 수열을 모두 구하는 문제. 백트래킹 문제로써 방문 확인을 하지 않고 함수의 매개변수 index를 추가 및 판단하여 풀었다.
```python
n, m = map(int, input().split())
l = list(range(1, n+1))
ans = []

def bt(depth, index):
    if depth == m:
        print(*ans)
        return

    for i in range(n):
        if l[i] >= index:
            ans.append(l[i])
            bt(depth + 1, l[i])
            ans.pop()

bt(0, 0)

```