---
title: 'BOJ-15657 - Python'
date: 2020-10-31 12:21:13
category: 'Algorithm'
draft: false
---
백트래킹 문제. n개의 자연수들을 같은 수를 여러 번 골라도 되며, 비내림차순으로 정렬된 길이가 m인 수열들을 출력하는 문제. 입력되는 자연수들을 sorted를 사용하여 정렬 후 배열의 마지막 값과 비교하여 배열에 추가하는 연산을 재귀적으로 활용하여 풀었다.
```python
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def bt(depth, ans):
    if depth == m:
        print(*ans[1:])
        return

    for i in l:
        if ans[-1] <= i:
            ans.append(i)
            bt(depth+1, ans)
            ans.pop()

n, m = map(int, input().split())
l = sorted(map(int, input().split()))
bt(0, [0])

```