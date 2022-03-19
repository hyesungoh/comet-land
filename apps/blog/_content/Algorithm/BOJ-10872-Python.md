---
title: 'BOJ-10872 - Python'
date: 2020-09-03 12:21:13
category: 'Algorithm'
draft: false
---
숫자 n을 입력받은 후 n!을 출력하는 문제. math 라이브러리의 factorial을 import해서 풀었으며, 재귀 함수를 구현해서 풀기도 하였다.
```python
from math import factorial as f
print(f(int(input())))

# def f(n):
#     return n * f(n-1) if n > 1 else 1
# print(f(int(input())))

```