---
title: 'BOJ-11931 - Python'
date: 2020-08-11 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수를 각 줄마다 입력받고 내림차순으로 정렬하여 각 줄마다 출력하는 문제. 첫풀이에서 시간초과 결과를 받게 되어 sys.stdin.readline을 import하였디. 그 후 sorted(퀵 정렬)와 reverse=True를 이용하여 풀었다.
```python
# l = []
# for _ in range(int(input())):
#     l.append(int(input()))
# l.sort(reverse=True)
# [print(i) for i in l]

# import sys
# print(*sorted([int(sys.stdin.readline()) for _ in range(int(input()))], reverse = True))

import sys
input = sys.stdin.readline
l = []
for _ in range(int(input())):
    l.append(int(input()))
[print(i) for i in sorted(l, reverse=True)]

```