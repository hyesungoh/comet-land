---
title: 'BOJ-2357 - Python'
date: 2021-1-4 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 주어진 후 정수 s, e가 주어진다. 입력된 수들의 인덱스 s부터 e까지 최소, 최대 값을 출력하는 문제. 첫 번째 접근은 리스트 슬라이싱을 이용하여 풀었으나 당연하게도 시간초과 결과를 받게 되었다. 두 번째 접근은 최소, 최대값을 저장하는 두개의 세그먼트 트리를 이용했다. 반환되는 값에 min과 max 함수를 사용하여 풀었다.
```python
# import sys
# input = sys.stdin.readline
# n, m = map(int, input().split())
# l = [0]
# for _ in range(n):
#     l.append(int(input()))
#
# for _ in range(m):
#     s, e = map(int, input().split())
#     print(min(l[s:e+1]), max(l[s:e+1]))


import sys
INF = sys.maxsize
input = sys.stdin.readline

n, m = map(int, input().split())
l = []
min_tree = [INF for _ in range(262144)]
max_tree = [0 for _ in range(262144)]

for _ in range(n):
    l.append(int(input()))

def min_init(node, start, end):
    if start == end:
        min_tree[node] = l[start]
    else:
        mid = (start + end) // 2
        min_tree[node] = min(min_init(node*2, start, mid), min_init(node*2+1, mid+1, end))
    return min_tree[node]

def check_min(node, start, end, left, right):
    if left > end or right < start:
        return INF
    if left <= start and right >= end:
        return min_tree[node]

    mid = (start + end) // 2
    return min(check_min(node*2, start, mid, left, right), check_min(node*2+1, mid+1, end, left, right))

def max_init(node, start, end):
    if start == end:
        max_tree[node] = l[start]
    else:
        mid = (start + end) // 2
        max_tree[node] = max(max_init(node*2, start, mid), max_init(node*2+1, mid+1, end))
    return max_tree[node]

def check_max(node, start, end, left, right):
    if left > end or right < start:
        return -1
    if left <= start and right >= end:
        return max_tree[node]

    mid = (start + end) // 2
    return max(check_max(node*2, start, mid, left, right), check_max(node*2+1, mid+1, end, left, right))


min_init(1, 0, n-1)
max_init(1, 0, n-1)

for _ in range(m):
    s, e = map(int, input().split())
    print(check_min(1, 0, n-1, s-1, e-1), check_max(1, 0, n-1, s-1, e-1))

```