---
title: 'BOJ-18258 - Python'
date: 2020-07-19 12:21:13
category: 'Algorithm'
draft: false
---
큐를 구현하는 문제. 첫 풀이는 저번과 같이 sys.stdin.readline으로 시간을 줄이고 class로 구현을 하였다. 하지만 이번 문제에서는 pop후에 요소들을 1칸씩 당기는 과정에ㅐ서 O(n)의 계산량때문에 시간초과 결과를 받게 되어 from collections import deque를 사용하여 구현하였다.
```python
from collections import deque

import sys
n = int(input())
deq = deque()
for i in range(n):
    command = sys.stdin.readline().split()

    if command[0] == 'push':
        deq.append(command[1])
    elif command[0] == 'pop':
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[0])
            deq.popleft()
    elif command[0] == 'size':
        print(len(deq))
    elif command[0] == 'empty':
        if len(deq) == 0:
            print(1)
        else:
            print(0)
    elif command[0] == 'front':
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[0])
    elif command[0] == 'back':
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[-1])

```