---
title: 'BOJ-1931 - Python'
date: 2020-10-5 12:21:13
category: 'Algorithm'
draft: false
---
회의실 한 개를 사용할 때, n개의 회의 시작시간, 회의 종료시간이 입력된 후 최대한 많은 회의를 할 때 그 수가 무엇인지 출력하는 문제. 입력되는 회의들을 sorted의 key 메소드를 lambda식을 이용하여 종료시간으로 정렬 후 시작시간으로 재정렬한 후, 종료시간과 시작시간을 확인하여 정수형 변수를 1씩 늘려 풀었다.
```python
import sys
input = sys.stdin.readline

l = []
for _ in range(int(input())):
    l.append(list(map(int, input().split())))
l = sorted(l, key=lambda x: (x[1], x[0]))

ans = 0
start_time = 0
for i in l:
    if start_time <= i[0]:
        ans += 1
        start_time = i[1]

print(ans)

```