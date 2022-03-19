---
title: 'BOJ-4101 - Python'
date: 2021-5-7 12:21:13
category: 'Algorithm'
draft: false
---
0 0이 입력될 때까지 두 수를 비교한 결과를 출력하는 문제, 카카오 인턴 코딩 테스트전에 간단히 풀어보았는데 약 이주동안 안풀었다고 어렵게 느껴진다.
```python
import sys
input = sys.stdin.readline

while True:
    n, m = map(int, input().split())
    if n == 0 and m == 0: break
    print("Yes" if n > m else "No")
```