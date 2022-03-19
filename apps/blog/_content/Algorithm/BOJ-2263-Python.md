---
title: 'BOJ-2263 - Python'
date: 2020-12-3 12:21:13
category: 'Algorithm'
draft: false
---
트리의 정점의 수와 중위 순회, 후위 순휘를 입력받은 후 해당 트리를 전위 순회하여 출력한 결과를 출력하는 문제. 후위 순회의 마지막을 기준으로 해당 노드를 출력 후, 중위 순회한 결과에서 해당 노드의 위치를 기준으로 왼쪽에 있는 노드를 후위 순회한 것 뒤에 위치한 후 해당 연산을 반복하면 전위 순회한 결과과 되는 것을 깨달은 후 새로운 리스트를 만들어서 재귀적으로 호출하여 풀었으나 메모리 초과 결과를 받게 되었다. 새로운 리스트를 계속해서 만들었기 때문이다. 두번째 풀이는 중위 순회, 후위 순회 각각 시작점과 끝점을 함수의 매개변수로 사용하여 재귀적으로 호출하였다. 후위 순회의 끝점을 출력한 후 `후위 시작점 + 해당 노드의 중위 순회 결과의 위치 - 중위 순회 시작점`을 계산 및 이용하여 해당 노드의 후위 순회 결과의 좌측, 우측을 나누는데 사용하였다.
```python
# import sys
# sys.setrecursionlimit(10**9)
# input = sys.stdin.readline
#
# def getPre(i, l):
#     if i == 0:
#         return
#     num = l.pop()
#     print(num, end=" ")
#
#     index = inor.index(num)
#     visit[index] = True
#
#     next_l = []
#     for node in range(index, n):
#         if not visit[node]:
#             next_l.append(inor[node])
#
#     for node in range(0, index):
#         if not visit[node]:
#             next_l.append(inor[node])
#
#     getPre(i-1, next_l)
#
#
# n = int(input())
# inor = list(map(int, input().split()))
# postor = list(map(int, input().split()))
# visit = [False for _ in range(n)]
# getPre(n, postor)


import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

def getPre(in_start, in_end, post_start, post_end):
    if in_start > in_end or post_start > post_end:
        return

    now = postor[post_end]
    print(now, end=" ")
    index = p[now]
    left = post_start + index - in_start
    getPre(in_start, index-1, post_start, left - 1)
    getPre(index+1, in_end, left, post_end-1)


n = int(input())
inor = list(map(int, input().split()))
postor = list(map(int, input().split()))
p = {}
for i in range(n):
    p[inor[i]] = i
getPre(0, n-1, 0, n-1)

```