---
title: 'BOJ-1159 - Python'
date: 2020-11-15 12:21:13
category: 'Algorithm'
draft: false
---
n개의 문자열을 입력받고 문자열의 첫번째 글자가 5개 이상 동일할 때 해당 문자를 사전순으로 정렬하여 출력하는 문제. 딕셔너리와 집합 자료형을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
d = {}
se = set()
for _ in range(n):
    s = input()[0]
    if s in d:
        d[s] += 1
        if d[s] >= 5:
            se.add(s)
    else:
        d[s] = 1

print("PREDAJA" if len(se) == 0 else ''.join(sorted(se)))

```