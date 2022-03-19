---
title: 'BOJ-1927 - Python'
date: 2020-10-7 12:21:13
category: 'Algorithm'
draft: false
---
최소 힙을 구현하는 문제. 0이 입력됐을 때 해당 배열에서 제일 작은 수를 출력 및 제거하고 다른 수가 입력됐을 때 배열에 추가하는 문제. 첫 풀이는 위 문제와 동일하게 insort를 사용했다. 추가적으로 리스트의 pop(0)의 시간복잡도보다 우위에 있는 deque의 popleft를 사용했는데도 시간초과 결과를 받게 되었다. 두번째 풀이는 파이썬의 내장 heapq를 import하여 heappush와 heappop을 사용하여 풀었다.
```python
# from bisect import insort
# from collections import deque
# import sys
# input = sys.stdin.readline
#
# l = deque()
# for _ in range(int(input())):
#     s = int(input())
#     if s > 0:
#         insort(l, s)
#     else:
#         if l == []:
#             print('0')
#         else:
#             print(l.popleft())


import sys, heapq
input = sys.stdin.readline
h = []
for _ in range(int(input())):
    n = int(input())
    if n > 0:
        heapq.heappush(h, n)
    else:
        if h == []:
            print(0)
        else:
            print(heapq.heappop(h))

```