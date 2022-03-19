---
title: 'BOJ-4153 - Python'
date: 2021-6-17 12:21:13
category: 'Algorithm'
draft: false
---
3가지 정수를 입력받은 후 해당 길이로 이루어진 삼각형일 때, 직각 삼각형인 지 출력하는 문제. 세 수를 제곱한 값과 비교하여 풀었다.
```python
import sys
input = sys.stdin.readline

while True:
    x, y, z = sorted(map(int, input().split()))
    if x == y == z == 0: break
    if x ** 2 + y ** 2 == z ** 2: print("right")
    else: print("wrong")

```