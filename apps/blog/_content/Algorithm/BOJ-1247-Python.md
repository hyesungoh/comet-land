---
title: 'BOJ-1247 - Python'
date: 2020-08-21 12:21:13
category: 'Algorithm'
draft: false
---
3번에 걸쳐 정수 n만큼 수를 입력받은 후 총합의 부호를 출력하는 문제. 현재 시간초과 결과를 보여주어, sys.stdin.readline을 import하여 해결하였다.
```python
# s = 0
# for _ in range(int(input())):
#     s += int(input())
# if s == 0: print(0)
# else:
#     print('+' if s > 0 else '-')


import sys
ip = sys.stdin.readline
for i in range(3):
    s = 0
    for _ in range(int(ip())):
        s += int(ip())
    print(('0' if s == 0 else '-' if s < 0 else '+'))

```