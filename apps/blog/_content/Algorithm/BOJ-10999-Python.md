---
title: 'BOJ-10999 - Python'
date: 2021-1-22 12:21:13
category: 'Algorithm'
draft: false
---
기존 구간합을 구하며, 특정 인덱스의 수를 바꾸는 세그먼트 트리문제에서 구간의 인덱스를 바꾸는 방식으로 바꾼 문제. 첫 접근은 단순히 업데이트 함수를 여러번 호출하면 될 것 같았으나 당연하게도 다른 방법이 존재하였다. lazy propagation이란 방법인데, 할 일을 나중으로 미루는 방법... 이다. [해당 글](https://www.acmicpc.net/blog/view/26)을 참고하여 풀었으나 아직도 어렵기만 하다. 다른 부분은 기존 세그먼트 트리 문제와 동일하며 query와 update_range 함수 호출 시 update_lazy를 호출하여 tree의 크기와 같은 lazy배열을 이용하여 나중에 더할 값을 저장하는 연산을 수행한다. 세그먼트 트리는 감을 잡기 시작한 것 같으나 lazy propagation은 아직 멀은 것 같다.
```python
import sys
import math
input = sys.stdin.readline

def init(node, start, end):
    if start == end:
        tree[node] = l[start]
        return tree[node]
    mid = (start + end) // 2
    tree[node] = init(node*2, start, mid) + init(node*2+1, mid+1, end)
    return tree[node]

def query(node, start, end, left, right):
    update_lazy(node, start, end)
    if left > end or right < start:
        return 0

    if left <= start and right >= end:
        return tree[node]

    mid = (start + end) // 2
    return query(node*2, start, mid, left, right) + query(node*2+1, mid+1, end, left, right)

def update_lazy(node, start, end):
    if lazy[node] != 0:
        tree[node] += (end-start+1) * lazy[node]
        if start != end:
            lazy[node*2] += lazy[node]
            lazy[node*2+1] += lazy[node]
        lazy[node] = 0

def update_range(node, start, end, left, right, diff):
    update_lazy(node, start, end)
    if left > end or right < start:
        return 0
    if left <= start and right >= end:
        tree[node] += (end-start+1) * diff
        if start != end:
            lazy[node*2] += diff
            lazy[node*2+1] += diff
        return
    mid = (start + end) // 2
    update_range(node*2, start, mid, left, right, diff)
    update_range(node*2+1, mid+1, end, left, right, diff)
    tree[node] = tree[node*2] + tree[node*2+1]

n, m, k = map(int, input().split())

l = []
for _ in range(n): l.append(int(input()))

heigth = math.ceil(math.log2(n))
size = 2 ** (heigth + 1)
tree = [0 for _ in range(size)]
lazy = [0 for _ in range(size)]
init(1, 0, n-1)

for _ in range(m+k):
    t = list(map(int, input().split()))
    if t[0] == 1:
        update_range(1, 0, n-1, t[1]-1, t[2]-1, t[3])
    else:
        print(query(1, 0, n-1, t[1]-1, t[2]-1))

```