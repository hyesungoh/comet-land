---
title: 'BOJ-5676 - Python'
date: 2021-1-10 12:21:13
category: 'Algorithm'
draft: false
---
수열을 입력받은 후 해당 인덱스의 값을 변경, 구간곱을 계산하여 해당 구간곱의 값이 양수, 음수, 0인 경우에 따라 +, -, 0을 출력하는 두가지 입력이 존재하는 문제. 모든 풀이는 세그먼트 트리를 이용하여 풀었다. 첫 풀이는 입력 및 저장되는 값을 그대로 계산하여 출력을 요구할 때 0과 비교하여 풀었으나 오버플로우로 유발됐다고 예상되는 시간초과 결과를 얻게 되었다. 두번째 풀이는 입력되는 수를 0과 비교하여 1, 0, -1로 반환하는 함수를 이용하여 풀었다.
```python
import sys
import math
input = sys.stdin.readline

def init(node, start, end):
    if start == end:
        tree[node] = l[start]
        return tree[node]

    mid = (start + end) // 2
    tree[node] = init(node*2, start, mid) * init(node*2+1, mid+1, end)
    return tree[node]

def query(node, start, end, left, right):
    if left > end or right < start:
        return 1
    if left <= start and right >= end:
        return tree[node]

    mid = (start + end) // 2
    return query(node*2, start, mid, left, right) * query(node*2+1, mid+1, end, left, right)

def update(node, start, end, index, to):
    if index < start or index > end:
        return
    if start == end:
        tree[node] = to
        return

    mid = (start + end) // 2
    update(node*2, start, mid, index, to)
    update(node*2+1, mid+1, end, index, to)
    tree[node] = tree[node*2] * tree[node*2+1]

def check_num(n):
    n = int(n)
    return 0 if n == 0 else (1 if n > 0 else -1)

while True:
    try:
        n, k = map(int, input().split())
    except:
        break

    l = list(map(check_num, input().split()))
    ans = []

    height = math.ceil(math.log2(n))
    size = 2 ** (height + 1)
    tree = [0 for _ in range(size)]

    init(1, 0, n-1)

    for i in range(k):
        method, s, e = input().split()
        s, e = int(s), int(e)

        if method == "C":
            e = check_num(e)
            update(1, 0, n-1, s-1, e)

        else:
            temp = query(1, 0, n-1, s-1, e-1)
            if temp == 0:
                ans.append("0")
            else:
                ans.append("+" if temp > 0 else "-")
    print(''.join(ans))

```