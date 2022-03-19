---
title: 'BOJ-7578 - Python'
date: 2021-3-16 12:21:13
category: 'Algorithm'
draft: false
---
기계의 식별번호로 이루어진 두 열을 입력받는다. 해당 식별번호로 케이블을 연결할 때 서로 교차하는 케이블 쌍의 개수를 출력하는 문제. 첫 번쨰 생각은 정렬 후에 LIS를 구할까 했으나, 최대 500,000개의 기계가 입력되며 시간 제한이 1초라 불가할 것으로 판단하였다. 세그먼트 트리를 이용하여 해당 인덱스밖의 연결 객체를 합하여 풀었다. 두 번째 기계열을 딕셔너리 자료형으로 key는 식별번호, value를 인덱스 번호로 저장하였으며, l1의 식별번호에 대하여 반복문을 수행하며 query, update 연산을 하여 풀었다. 자세한 풀이는 [해당 게시물](https://hooongs.tistory.com/118) 참조
```python
import sys
from math import log2, ceil
input = sys.stdin.readline

def update(node, start, end, idx):
    if idx < start or end < idx:
        return 0
    if start == end:
        tree[node] = 1
        return 1

    mid = (start + end) // 2
    update(node*2, start, mid, idx)
    update(node*2+1, mid+1, end, idx)
    tree[node] = tree[node*2] + tree[node*2+1]
    return tree[node]

def query(node, start, end, left, right):
    if right < start or end < left:
        return 0

    if left <= start and end <= right:
        return tree[node]

    mid = (start + end) // 2
    return query(node*2, start, mid, left, right) + query(node*2+1, mid+1, end, left, right)

n = int(input())
l1 = input().split()
idx, l2 = 0, {}
for num in input().split():
    l2[num] = idx
    idx += 1

height = ceil(log2(n))
size = 2 ** (height + 1)
tree = [0 for _ in range(size)]

answer = 0
for num in l1:
    l2_idx = l2[num]
    answer += query(1, 0, n-1, l2_idx, n-1)
    update(1, 0, n-1, l2_idx)
print(answer)

```