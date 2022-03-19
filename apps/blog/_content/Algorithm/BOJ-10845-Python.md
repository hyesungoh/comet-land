---
title: 'BOJ-10845 - Python'
date: 2020-07-08 12:21:13
category: 'Algorithm'
draft: false
---
큐를 구현하는 문제이다. 스택과 마찬가지로 클래스를 이용하여 구현하였다. 백준 풀이상 시간초과 오류로 인해 sys.stdin.readline을 사용하였다.
```python
import sys
input=sys.stdin.readline

class Queue:
    def __init__(self):
        self.len = 0
        self.list = []

    def push(self, n):
        self.len += 1
        self.list.append(n)

    def pop(self):
        if self.len > 0:
            self.len -= 1
            return self.list.pop(0)
        else: return -1

    def size(self):
        return self.len

    def empty(self):
        return 1 if self.len == 0 else 0

    def front(self):
        return -1 if self.len == 0 else self.list[0]

    def back(self):
        return -1 if self.len == 0 else self.list[self.len-1]

q = Queue()
for _ in range(int(input())):
    s = input().strip()
    if 'push' in s: q.push(s.split()[1])
    elif s == 'pop': print(q.pop())
    elif s == 'size': print(q.size())
    elif s == 'empty': print(q.empty())
    elif s == 'front': print(q.front())
    elif s == 'back': print(q.back())
    else: print('none')

```