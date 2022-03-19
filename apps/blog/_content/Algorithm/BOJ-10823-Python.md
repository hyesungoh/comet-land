---
title: 'BOJ-10823 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
여러 줄로 입력되는 쉼표로 나누어져 있는 정수들로 이루어진 문자열의 총합을 구하는 문제. readlines를 이용하여 EOF까지 입력을 받은 값을 replace('\n', '')을 이용하여 줄바꿈을 공백으로 바꾼 후 문자열에 더한 값을 split()과 sum을 이용하여 풀었다.
```python
import sys
l = sys.stdin.readlines()
s = ""
for i in l:
    s += i.replace('\n', '')
print(sum(map(int, s.split(','))))

```