---
title: 'BOJ-10866 - Python'
date: 2020-07-10 12:21:13
category: 'Algorithm'
draft: false
---
덱을 구햔하는 문제이다. 위 스택과 큐와 같이 클래스를 이용하여 구현했으며 백준 풀이상 시간초과 오류로 인해 sys.stdin.realine을 사용하였다. list.pop(-1)도 마지막 요소를 pop해준 다는 것 또한 알게 되었다.
```python
import sys
input=sys.stdin.readline
class Deque:
    def __init__(self):
        self.len = 0
        self.list = [];

    def push_front(self, n):
        self.len += 1
        self.list.insert(0, n)

    def push_back(self, n):
        self.len += 1
        self.list.append(n)

    def pop_front(self):
        if self.len > 0:
            self.len -= 1
            return self.list.pop(0)
        else: return -1

    def pop_back(self):
        if self.len > 0:
            self.len -= 1
            return self.list.pop(-1)
        else: return -1

    def size(self):
        return self.len

    def empty(self):
        return 1 if self.len == 0 else 0

    def front(self):
        return  -1 if self.len == 0 else self.list[0]

    def back(self):
        return -1 if self.len == 0 else self.list[-1]

d = Deque()
for _ in range(int(input())):
    s = input().strip()
    if 'push_front' in s: d.push_front(s.split()[1])
    elif 'push_back' in s: d.push_back(s.split()[1])
    elif s == 'pop_front': print(d.pop_front())
    elif s == 'pop_back': print(d.pop_back())
    elif s == 'size': print(d.size())
    elif s == 'empty': print(d.empty())
    elif s == 'front': print(d.front())
    elif s == 'back': print(d.back())
    else: print('none')

```