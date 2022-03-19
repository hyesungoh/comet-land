---
title: 'BOJ-2042 - Python'
date: 2021-1-3 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 주어진 후 수열의 값을 변경, 해당 수열의 구간 합을 출력하는 문제. 세그먼트 트리 방식을 이용하여 풀었으며 입력되는 수들을 배열에 저장, 새로운 배열을 세그먼트 트리화하였다. init, sum, change 함수 모두 재귀적으로 호출하여 사용하였으며 중간 값 나누기 연산을 변수에 할당하여 작지만 연산을 줄여 풀었다. 자세한 풀이는 문제의 주석을 참고
```python
import sys
input = sys.stdin.readline

def init(node, start, end):
    # start == end는 리프 노드일 때를 뜻함
    # 리프 노드인 경우 배열의 원소 값을 반환
    if start == end:
        tree[node] = l[start]
        return tree[node]

    # 재귀적으로 왼쪽, 오른쪽 자식 트리를 만들고 합을 저장
    middle = (start + end) // 2
    tree[node] = init(node*2, start, middle) + init(node*2+1, middle+1, end)
    return tree[node]

# 트리의 구역 start, end
# 합을 구할 구역 left, right
def section_sum(node, start, end, left, right):
    # 합을 구해야하는 구역과 현재 탐색할 트리의 구역이 겹치지 않아 탐색할 필요가 없다
    if left > end or right < start:
        return 0

    # 범위에 포함될 시 그 자식노드들도 포함이기 때문에 더 이상 호출하지 않아도 된다
    if left <= start and right >= end:
        return tree[node]

    middle = (start+end)//2
    # 왼쪽, 오른쪽 자식을 루트로 하는 트리에서 재귀적으로 재탐색
    return section_sum(node*2, start, middle, left, right) + section_sum(node*2+1, middle+1, end, left, right)

def change_num(node, start, end, index, diff):
    # 범위 외일 시 종료
    if index < start or index > end:
        return

    # 트리의 값을 Update
    tree[node] += diff

    # 리프 노드가 아닐 경우 자식들도 값을 변경해야하기 때문에 재귀적으로 호출
    if start != end:
        middle = (start+end)//2
        change_num(node*2, start, middle, index, diff)
        change_num(node*2+1, middle+1, end, index, diff)


# 수의 개수, 수의 변경이 일어나는 횟수, 구간의 합을 구하는 횟수
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
        # 현재 인덱스에 있는 수와 바꿔야되는 수의 차이
        diff = c - l[b]
        l[b] = c
        change_num(1, 0, n-1, b, diff)
    else:
        print(section_sum(1, 0, n-1, b-1, c-1))

```