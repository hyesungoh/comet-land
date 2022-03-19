---
title: 'BOJ-15654 - Python'
date: 2020-10-15 12:21:13
category: 'Algorithm'
draft: false
---
자연수 n, m이 입력된 후 n개로 이루어진 수열이 입력된다. 이 때 중복 없이 m개를 고른 수열들을 출력하는 문제. sorted를 이용하여 입력되는 수열을 정렬하여 저장하였다. 위에 백트래킹 문제들은 리스트를 사용하여 방문 확인을 하였지만 이번 문제에서는 수열에 규칙이 없어 딕셔너리 자료형을 이용하여 방문 확인을 하여 풀었다.
```python
n, m = map(int, input().split())
l = sorted(map(int, input().split()))
ans = []
visit = {}
for i in l:
    visit[i] = False

def bt(depth):
    if depth == m:
        print(*ans)
        return

    for i in l:
        if visit[i]:
            continue

        ans.append(i)
        visit[i] = True
        bt(depth+1)
        visit[i] = False
        ans.pop()

bt(0)

```