---
title: 'BOJ-11279 - Python'
date: 2020-10-7 12:21:13
category: 'Algorithm'
draft: false
---
최대 힙을 구현하는 문제. 0이 입력됐을 때 해당 배열에서 제일 큰 수를 출력 및 제거하고 다른 수가 입력됐을 때 배열에 추가하는 문제. bisect의 insort를 이용하여 배열에 추가할 때 정렬하여 넣은 후, 리스트의 pop을 이용하여 출력하였다
```python
from bisect import insort
import sys
input = sys.stdin.readline

l = []
for _ in range(int(input())):
    s = int(input())
    if s > 0:
        insort(l, s)
    else:
        if l == []:
            print('0')
        else:
            print(l.pop())

```