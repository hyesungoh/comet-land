---
title: 'BOJ-2667 - Python'
date: 2020-09-03 12:21:13
category: 'Algorithm'
draft: false
---
n\*n의 크기의 0과 1로 이루어진 2차원 배열을 입력받은 후, 상하좌우 연결된 1의 수의 집합들의 수와 각 집합의 수를 정렬하여 출력하는 문제. 재귀적으로 배열의 상하좌우가 1인지 확인하며 count에 1씩 더하며 count를 반환하며 해당 배열 인자를 0으로 바꾸는 함수 dfs를 만들었으며, 이 중 배열의 크기를 넘는 경우를 위해 두 개의 조건문 중에 배열의 크기 확인을 and 앞에두는 것으로 방지할 수 있다는 것을 배웠다. 이후 배열의 모든 부분을 2중 반복문을 사용하여 1인지 확인하여 ans 리스트에 append한 후 sorted와 len 함수를 사용하여 풀었다.
```python
n = int(input())
l = []
for i in range(n):
    l.append(list(map(int, list(input()))))
ans = []

def dfs(count, i, j):
    l[i][j] = 0
    if j+1 < n and l[i][j+1] == 1:
        count = dfs(count+1, i, j+1)
    if j-1 >= 0 and l[i][j-1] == 1:
        count = dfs(count+1, i, j-1)
    if i+1 < n and l[i+1][j] == 1:
        count = dfs(count+1, i+1, j)
    if i-1 >= 0 and l[i-1][j] == 1:
        count = dfs(count + 1, i-1, j)

    return count

for i in range(n):
    for j in range(n):
        if l[i][j] == 1:
            ans.append(dfs(1, i, j))

print(len(ans))
[print(i) for i in sorted(ans)]

```