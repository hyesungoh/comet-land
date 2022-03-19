---
title: 'BOJ-11725 - Python'
date: 2020-10-22 12:21:13
category: 'Algorithm'
draft: false
---
그래프의 루트가 1일 때 n개의 노드들을 입력받은 후 2번째 노드부터 부모 노드를 출력하는 문제. n의 길이만큼 0으로 이루어진 리스트를 만든 후 노드를 쌍방향으로 저정한다. 자식 노드를 찾고 리스트의 해당 자식 노드 -1 인덱스의 값이 0일 때 현재 노드의 값을 저장하는 함수를 만들고 재귀적으로 호출한다. 리스트의 2번째 인자부터 출력하여 풀었다.
```python
import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n = int(input())
l = [0 for _ in range(n)]
graph = {}
for _ in range(n-1):
    x, y = map(int, input().split())
    if x in graph:
        graph[x].append(y)
    else:
        graph[x] = [y]
    if y in graph:
        graph[y].append(x)
    else:
        graph[y] = [x]

def fp(n):
    for i in graph[n]:
        if l[i - 1] == 0:
            l[i - 1] = n
            fp(i)
fp(1)
[print(i) for i in l[1:]]

```