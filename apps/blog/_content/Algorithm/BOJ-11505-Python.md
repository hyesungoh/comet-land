---
title: 'BOJ-11505 - Python'
date: 2021-1-4 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 주어진 후 수열의 값을 변경, 해당 수열의 구간 곱을 출력하는 문제. 위 문제와 동일한 세그먼트 트리 방식을 이용하여 풀었으며 곱한 값을 저장해야하는 만큼 재귀적으로 호출하여 값을 저장할 때 곱하기 연산을 사용하였으며 트리에 저장시에도 정해진 나누기 연산을 미리 수행하여 오버플로우 발생 및 연산을 빠르게 하였다. 또한 값을 변경 시에 리프노드일 시 tree의 값을 바꿔야하는 값으로 바꿔 주었으며 재귀 호출 후에 왼쪽, 오른쪽 자식 노드의 값을 곱한 값을 할당하여 풀었다.
```python
import sys
input = sys.stdin.readline

def init(node, start, end):
    if start == end:
        tree[node] = l[start]
        return tree[node]

    mid = (start+end)//2
    temp = init(node*2, start, mid) * init(node*2+1, mid+1, end)
    tree[node] = temp % 1000000007
    return tree[node]

def section_multi(node, start, end, left, right):
    if left > end or right < start:
        return 1
    if left <= start and right >= end:
        return tree[node]

    mid = (start+end)//2
    temp = section_multi(node*2, start, mid, left, right) * section_multi(node*2+1, mid+1, end, left, right)
    return temp % 1000000007

def update(node, start, end, index, diff):
    if index < start or index > end:
        return

    if start == end:
        tree[node] = diff
        return

    mid = (start+end)//2
    update(node*2, start, mid, index, diff)
    update(node*2+1, mid+1, end, index, diff)
    tree[node] = (tree[node*2] * tree[node*2+1]) % 1000000007

n, m, k = map(int, input().split())
l = []
tree = [0 for _ in range(3000000)]

for _ in range(n):
    l.append(int(input()))

init(1, 0, n-1)

for _ in range(m+k):
    a, b, c = map(int, input().split())
    if a == 1:
        b -= 1
        l[b] = c
        update(1, 0, n-1, b, c)
    else:
        print(section_multi(1, 0, n-1, b-1, c-1))

```