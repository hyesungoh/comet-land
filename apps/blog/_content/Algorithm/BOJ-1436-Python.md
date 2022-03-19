---
title: 'BOJ-1436 - Python'
date: 2020-07-03 12:21:13
category: 'Algorithm'
draft: false
---
666이 들어간 수 중에 n번째로 큰 수를 출력하는 문제. 브루트포스 방법으로 풀었다.
```python
n, i, j = int(input()), 0, 665
while i != n:
    j += 1
    if '666' in str(j): i += 1
print(j)

```