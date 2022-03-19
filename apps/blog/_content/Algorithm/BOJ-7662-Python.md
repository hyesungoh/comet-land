---
title: 'BOJ-7662 - Python'
date: 2020-09-27 12:21:13
category: 'Algorithm'
draft: false
---
최솟값과 최댓값을 기준으로 두가지의 우선순위를 갖는 큐를 구현하는 문제. bisect를 사용하여 이진탐색 후 deque에 위치파악 후 삼입하는 방법을 사용하여, q[0]에 최솟값, q[-1]에 최댓값이 위치하도록 하였다.또한 중복되는 값을 허용하며 삭제 시에는 값을 하나만 삭제하기 때문에 딕셔너리 자료형을 사용하여 중복되는 수를 계산하여 주었으며, if not deque처럼 사용하여 deque가 비었을 때 'EMPTY'를, 아닐 때 최댓값과 최솟값을 출력하여 풀었다
```python
import bisect
import sys
from collections import deque
input = sys.stdin.readline

class Dpq:
    def __init__(self):
        self.q = deque()
        self.d = dict()

    def input(self, n):
        try:
            self.d[n] += 1
        except:
            self.d[n] = 1
            bisect.insort_left(self.q, n) # 이진탐색을 이용해 위치파악 후 삼입

    def remove(self, n):
        if not self.q:
            pass
        elif n == 1:
            if self.d[self.q[-1]] == 1:
                self.d.pop(self.q[-1])
                self.q.pop()
            else:
                self.d[self.q[-1]] -= 1
        else:
            if self.d[self.q[0]] == 1:
                self.d.pop(self.q[0])
                self.q.popleft()
            else:
                self.d[self.q[0]] -= 1

    def print(self):
        if not self.q:
            print('EMPTY')
        else:
            print(self.q[-1], self.q[0])

for _ in range(int(input())):
    dpq = Dpq()
    for _ in range(int(input())):
        s, n = input().split()
        n = int(n)
        if s == "I":
            dpq.input(n)
        else:
            dpq.remove(n)
    dpq.print()

```