---
title: 'BOJ-2243 - Python'
date: 2021-4-4 12:21:13
category: 'Algorithm'
draft: false
---
몇 번째로 맛있는 사탕을 pop, 사탕을 상자에서 넣고 뺌을 구현하는 문제. 세그먼트 트리를 이용하여 개수를 업데이트, 몇 번째 맛인 지를 확인하는 쿼리를 이용하여 상자를 조작할 때는 업데이트를 이용하여, 몇 번째 사탕을 꺼낼 때는 인덱스를 참고하여 출력하고, -1 diff로 업데이트하여 풀었다.
```python

import sys
from math import log2, ceil
input = sys.stdin.readline

MAX = 1000000

def update(node, start, end, index, diff):
    if start > index or index > end:
        return

    tree[node] += diff
    if start != end:
        mid = (start + end) // 2
        update(node * 2, start, mid, index, diff)
        update(node * 2 + 1, mid + 1, end, index, diff)

def query(node, start, end, seq):
    if start == end: return start

    mid = (start + end) // 2
    # 왼쪽으로 탐색
    if tree[node * 2] >= seq:
        return query(node * 2, start, mid, seq)
    # 오른쪽으로 탐색
    else:
        return query(node * 2 + 1, mid + 1, end, seq - tree[node * 2])


height = ceil(log2(MAX))
size = 2 ** (height + 1)
tree = [0 for _ in range(size)]


for _ in range(int(input())):
    ip = list(map(int, input().split()))
    if ip[0] == 1:
        index = query(1, 0, MAX-1, ip[1])
        print(index)
        update(1, 0, MAX-1, index, -1)

    else:
        update(1, 0, MAX-1, ip[1], ip[2])
```