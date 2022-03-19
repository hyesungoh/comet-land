---
title: 'BOJ-14425 - Python'
date: 2020-10-21 12:21:13
category: 'Algorithm'
draft: false
---
정수 i와 j를 입력받은 후 j개의 문자열 중에 i개의 문자열에 몇 개 있는지 출력하는 문제. i개의 문자열을 중복되지 않고 리스트보다 찾을 때 빠른 집합 자료형을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

i, j = map(int, input().split())
ans = 0

s = {input().strip() for _ in range(i)}

for _ in range(j):
    if input().strip() in s:
        ans += 1

print(ans)

```