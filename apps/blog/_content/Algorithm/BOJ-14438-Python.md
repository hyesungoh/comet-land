---
title: 'BOJ-14438 - Python'
date: 2021-2-22 12:21:13
category: 'Algorithm'
draft: false
---
특정 구간 제일 작은 수를 구하며 업데이트하는 세그먼트 트리 문제. 업데이트 시 범위를 벗어 날 시 INF를 반환하였었는데 해당 부분 때문에 WA를 받았었다. 업데이트 시 해당 인덱스와 바꿔야하는 값을 이용하여 start == end일 시 바꿔야되는 값으로 바꾸어 풀었다.
```python
import sys
from math import log2, ceil

INF = sys.maxsize
input = sys.stdin.readline

def init(node, start, end):
    if start == end:
        tree[node] = l[start]
        return tree[node]

    mid = (start + end) // 2
    tree[node] = min(init(node*2, start, mid), init(node*2+1, mid+1, end))
    return tree[node]

def query(node, start, end, left, right):
    if left > end or right < start:
        return INF

    if left <= start and end <= right:
        return tree[node]

    mid = (start + end) // 2
    return min(query(node*2, start, mid, left, right), query(node*2+1, mid+1, end, left, right))

def update(node, start, end, index, to):
    if index < start or end < index:
        return tree[node]

    if start == end:
        tree[node] = to
        return tree[node]

    mid = (start + end) // 2
    tree[node] = min(update(node*2, start, mid, index, to), update(node*2+1, mid+1, end, index, to))
    return tree[node]

n = int(input())
l = list(map(int, input().split()))
m = int(input())

height = ceil(log2(n))
size = 2 ** (height + 1)
tree = [INF for _ in range(size)]
init(1, 0, n-1)

for _ in range(m):
    q, i, j = map(int, input().split())
    if q == 1:
        update(1, 0, n-1, i-1, j)
    else:
        print(query(1, 0, n-1, i-1, j-1))

```