---
title: 'BOJ-10773 - Python'
date: 2020-11-29 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수를 입력받는다. n이 0일 때 제일 최근에 입력받은 수를 지운다고 할 때 입력되는 수들의 총합을 구하는 문제. 리스트의 append와 pop을 이용하여 스택 자료구조의 모습을 간단히 구현하여 풀었다.
```python
import sys
input = sys.stdin.readline
l = []
for _ in range(int(input())):
    n = int(input())
    if n == 0:
        l.pop()
        continue
    l.append(n)
print(sum(l))

```