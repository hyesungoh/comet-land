---
title: 'BOJ-1991 - Python'
date: 2020-10-27 12:21:13
category: 'Algorithm'
draft: false
---
이진 트리를 '부모 왼쪽자식 오른쪽자식' 형태의 문자열로 입력받은 후 전위, 중위, 후위 순회한 결과값을 출력하는 문제. 딕셔너리 형태로 graph[부모] = [왼쪽자식, 오른쪽자식] 형태로 저장했다. 모든 순회는 재귀형식으로 작동하며 전위 순회는 출력 후 왼쪽, 오른쪽자식 순으로 재귀적으로 호출. 중위는 왼쪽 자식 호출 후 출력, 오른쪽 자식 호출. 후위는 왼쪽, 오른쪽 자식 호출 후 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def front(root, graph):
    if root in graph:
        l, r = graph[root]
        print(root, end='')
        front(l, graph)
        front(r, graph)
    else: return

def middle(root, graph):
    if root in graph:
        l, r = graph[root]
        middle(l, graph)
        print(root, end='')
        middle(r, graph)
    else: return

def last(root, graph):
    if root in graph:
        l, r = graph[root]
        last(l, graph)
        last(r, graph)
        print(root, end='')
    else: return


graph = {}
for _ in range(int(input())):
    d, l, r = input().split()
    graph[d] = [l, r]


front('A', graph)
print()
middle('A', graph)
print()
last('A', graph)

```