---
title: 'BOJ-1182 - Python'
date: 2020-12-26 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 수열의 부분수열 중 합이 s인 경우의 수를 출력하는 문제. 백트래킹 방식을 이용하여 풀었으며 i+1부터 n까지 방문확인을 해제하여 순서가 다르지만 값은 같은 경우를 방지하였으며 방문한 리스트가 비어있지 않으며 합한 값이 s와 같을 때 CBR를 이용하여 값을 추가하여 풀었다.
```python
def bt(depth, temp_list):
    if sum(temp_list) == s and temp_list != []:
        ans[0] += 1

    elif depth == n:
        return

    for i in range(n):
        if not visit[i]:
            visit[i] = True
            temp_list.append(l[i])

            bt(depth+1, temp_list)

            temp_list.pop()
            for j in range(i+1, n):
                visit[j] = False


n, s = map(int, input().split())
l = list(map(int, input().split()))
visit = [False for _ in range(n)]
tl = []
ans = [0]
bt(0, tl)
print(ans[0])

```