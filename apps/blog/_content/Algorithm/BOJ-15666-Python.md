---
title: 'BOJ-15666 - Python'
date: 2020-11-10 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수 중에 m개의 수를 비내림차순으로 만든 수열을 출력하는 백트래킹 문제. 같은 수가 여러번 입력되며 동일한 수열은 출력하면 안되는 조건이 있기에 제일 최근 리스트에 추가한 수를 비교, 전 재귀에서 사용한 값과 비교하여 풀었다.
```python
def bt(depth, index):
    if depth == m:
        print(*ans)
        return

    temp = 0
    for i in l:
        if index <= i and temp != i:
            temp = i
            ans.append(i)
            bt(depth+1, i)

            ans.pop()

n, m = map(int, input().split())
l = sorted(map(int, input().split()))
ans = []

bt(0, 0)

```