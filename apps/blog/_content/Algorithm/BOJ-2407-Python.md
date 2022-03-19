---
title: 'BOJ-2407 - Python'
date: 2020-07-31 12:21:13
category: 'Algorithm'
draft: false
---
두 수, n과 m을 입력받은 후 조합 nCm을 출력하는 문제. 팩토리얼은 알았어도 수열과 조합은 무지했던 나는 공식을 찾아본 후에야 풀 수 있었다. 파이썬 itertools의 combinations는 리스트를 반환하므로 문제와 맞지 않아 math의 팩토리얼을 import하여 n! / m! \* (n-m)!하여 풀 수 있었다. 부족한 부분이 너무 많다
```python
from math import factorial
n,m=map(int,input().split())
print((factorial(n)//(factorial(m)*factorial(n-m))))

```