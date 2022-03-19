---
title: 'BOJ-11723 - Python'
date: 2020-09-17 12:21:13
category: 'Algorithm'
draft: false
---
1부터 20의 범위를 갖는 공집합이 있을 때 추가, 삭제, 확인, 토글, 전체 1로 만들기, 전체 0으로 만들기 기능이 있는 공집합을 구현하는 문제. 첫 풀이는 파이썬의 set 자료형을 사용하여 풀려했으나 확인 후 출력할 때 효율적이지 못할 거 같아 21의 크기를 갖는 리스트 자료형을 만들어 0과 1로 구분지어 풀었다. 토글은 not 1 or 0을 int로 저장하여 풀었다.
```python
import sys
input = sys.stdin.readline

class Set:
    def __init__(self):
        self.list = [0] * 21

    def check(self, t):
        t = t.split()
        if t[0] == 'add':
            self.list[int(t[1])] = 1
        elif t[0] == 'remove':
            self.list[int(t[1])] = 0
        elif t[0] == 'check':
            print(self.list[int(t[1])])
        elif t[0] == 'toggle':
            self.list[int(t[1])] = int(not int(self.list[int(t[1])]))
        elif t[0] == 'empty':
            self.list = [0] * 20
        elif t[0] == 'all':
            self.list = [1] * 20

s = Set()
for _ in range(int(input())):
    s.check(input())

```