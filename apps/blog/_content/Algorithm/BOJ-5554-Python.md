---
title: 'BOJ-5554 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
4개의 줄에 입력되는 수들을 분과 초로 출력하는 문제. 60으로 나눈 값과 나머지를 출력하여 풀었다.
```python
n = 0
for _ in range(4):
    n += int(input())
print(n//60)
print(n%60)

```