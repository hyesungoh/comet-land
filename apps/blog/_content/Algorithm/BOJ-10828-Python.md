---
title: 'BOJ-10828 - Python'
date: 2020-06-30 12:21:13
category: 'Algorithm'
draft: false
---
스택을 구현하는 문제이다. 처음엔 전역 변수 list, l과 함수들로 구현하였지만 백준 체점 도중 런타임 에러로 인하여 class로 스택을 구현하였으나 이 또한 백준 체점 도중 시간초과로 인해 input = sys.stdin.readline를 이용하여 시간을 단축시켰다. 풀이는 쉬웠으나 체점 기준에 맞추기 힘들었다.
```python
import sys
input=sys.stdin.readline

class Stack:
    def __init__(self):
        self.len = 0
        self.list = []
    def push(self, n):
        self.len += 1
        self.list.append(n)
    def pop(self):
        if self.len == 0:
            return -1
        self.len -= 1
        return self.list.pop()
    def size(self):
        return self.len
    def empty(self):
        return 1 if self.len == 0 else 0
    def top(self):
        return self.list[-1] if self.len != 0 else -1

s = Stack()
for _ in range(int(input())):
    t = input().strip()
    if 'push' in t:
        num = list(t.split())[1]
        s.push(num)
    elif t == "pop": print(s.pop())
    elif t == 'size': print(s.size())
    elif t == 'empty': print(s.empty())
    elif t == 'top': print(s.top())
    else: print('none')

```