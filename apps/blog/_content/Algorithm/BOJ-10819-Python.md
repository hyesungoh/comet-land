---
title: 'BOJ-10819 - Python'
date: 2020-12-27 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 수열이 입력된다. 이 때 수열의 자리를 바꾸어 |l[0] - l[1]| + |l[1] - l[2]| + ... 의 식을 계산했을 시 나올 수 있는 최댓값을 출력하는 문제. 백트래킹 방법을 이용하여 모든 경우의 수를 배열에 저장 후, 배열의 길이가 n과 같아질 시 계산 후 값을 저장, 백트래킹이 끝난 후에 max값을 출력하여 풀었다.
```python
def calcur(tl):
    t = 0
    for i in range(n-1):
        t += abs(tl[i] - tl[i+1])
    return t

def bt(depth, tl):
    if depth == n:
        ans.append(calcur(tl))
        return

    for i in range(n):
        if visit[i]:
            continue

        visit[i] = True
        tl.append(l[i])
        bt(depth+1, tl)
        visit[i] = False
        tl.pop()


n = int(input())
l = list(map(int, input().split()))
visit = [False for _ in range(n)]
tl = []
ans = []

bt(0, tl)
print(max(ans))

```