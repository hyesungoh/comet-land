---
title: 'BOJ-15649 - Python'
date: 2020-10-15 12:21:13
category: 'Algorithm'
draft: false
---
자연수 n, m이 입력될 때 1부터 n까지 자연수 중에서 중복 없이 m개를 고른 수열들을 출력하는 문제. 방문 확인 배열을 사용했으며 매개변수로 길이를 확인하여 출력 및 return으로 함수를 종료하였다. n까지 반복문을 수행하고 방문 확인을하여 넘어가도록 하였다. 그 후 배열에 추가 및 방문 확인 배열을 수정한 후 재귀적으로 함수를 호출하였다. 그 후 다음 반복을 위해 방문 확인 배열을 재수정, 방금 들어간 배열의 요소를 삭제하기 위해 pop하여 풀었다.
```python
n, m = map(int, input().split())
l = list(range(1, n+1))
visit = [False] * n
ans = []

def bt(depth):
    if depth == m:
        print(*ans)
        return

    for i in range(n):
        if visit[i]:
            continue

        ans.append(l[i])
        visit[i] = True
        bt(depth+1)
        visit[i] = False
        ans.pop()

bt(0)

```