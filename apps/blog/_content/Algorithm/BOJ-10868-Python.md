---
title: 'BOJ-10868 - Python'
date: 2021-1-5 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 주어진 후 정수 s, e가 주어진다. 입력된 수들의 인덱스 s부터 e까지 최솟값을 출력하는 문제. 위 문제와 같은 세그먼트 트리 방식을 이용하여 풀었으며 재귀적으로 반환 하는 값의 연산을 min 함수를 이용하여 풀었다.
```python
import sys
INF = sys.maxsize
input = sys.stdin.readline

def init(node, start, end):
    if start == end:
        tree[node] = l[start]
    else:
        mid = (start + end) // 2
        tree[node] = min(init(node*2, start, mid), init(node*2+1, mid+1, end))
    return tree[node]

def query(node, start, end, left, right):
    if left > end or right < start:
        return INF
    if left <= start and right >= end:
        return tree[node]

    mid = (start + end) // 2
    return min(query(node*2, start, mid, left, right), query(node*2+1, mid+1, end, left, right))

n, m = map(int, input().split())
l = []
tree = [INF for _ in range(333333)]
for _ in range(n):
    l.append(int(input()))

init(1, 0, n-1)

for _ in range(m):
    s, e = map(int, input().split())
    print(query(1, 0, n-1, s-1, e-1))

```