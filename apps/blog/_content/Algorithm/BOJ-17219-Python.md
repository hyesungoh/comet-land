---
title: 'BOJ-17219 - Python'
date: 2020-12-19 12:21:13
category: 'Algorithm'
draft: false
---
n개의 공백으로 나누어진 문자열을 입력받은 후 m개의 문자열로 앞서 입력받은 문자열에서 찾아 뒤의 문자열을 출력하는 문제. 딕셔너리 자료형을 이용하여 저장, 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
d = {}
for _ in range(n):
    s, p = input().split()
    d[s] = p

for _ in range(m):
    print(d[input().strip()])

```