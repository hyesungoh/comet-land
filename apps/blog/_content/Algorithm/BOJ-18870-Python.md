---
title: 'BOJ-18870 - Python'
date: 2020-10-8 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수열이 입력되며 해당 수열을 좌표 압축하여 출력하는 문제. 첫 풀이는 sorted를 이용하여 정렬, set을 이용하여 중복된 값 제거를 한 후 zip을 이용하여 2개의 인자를 갖는 for문을 이용하여 딕셔너리 자료형에 저장, 딕셔너리 자료형을 이용하여 출력하여 풀었다. 두번째 풀이는 enumerate를 사용하여 더욱 편하게 풀었으며 이 때문에 n을 사용하지 않고 풀었다.
```python
# import sys
# input = sys.stdin.readline
# n = int(input())
# l = list(map(int, input().split()))
# sorted_l = sorted(set(l))
#
# d = {}
# for location, i in zip(sorted_l, range(n)):
#     d[location] = i
#
# [print(d[i], end=' ') for i in l]

input()
l = list(map(int, input().split()))
d = {}
for v, k in enumerate(sorted(set(l))): d[k] = v
print(*(d[i] for i in l))

```