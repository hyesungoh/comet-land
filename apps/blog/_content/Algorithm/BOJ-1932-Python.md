---
title: 'BOJ-1932 - Python'
date: 2020-10-25 12:21:13
category: 'Algorithm'
draft: false
---
다이내믹 프로그래밍 문제. n개의 층으로 이루어진 삼각형을 입력받은 후. 맨 위층부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합의 최대를 출력하는 문제. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있는 조건이 있다. 0~n층까지 i라고 했을 때. 각 층은 i+1개의 요소로 이루어져 있는 것을 이용하여 [i-1][j]에 [i][j]와 [i][j+1] 중 큰 것을 더하여 풀었다.
```python
import sys
input = sys.stdin.readline

l = []; n = int(input())
for _ in range(n):
    l.append(list(map(int, input().split())))

for i in range(n-1, 0, -1):
    for j in range(i):
        l[i-1][j] += max(l[i][j], l[i][j+1])

print(l[0][0])

```