---
title: 'BOJ-5656 - Python'
date: 2020-11-15 12:21:13
category: 'Algorithm'
draft: false
---
숫자와 함께 비교 연산자로 이루어진 식을 입력받은 후 결과를 출력하는 문제. 문자열을 실행하는 eval을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline
i = 1
while True:
    n1, oper, n2 = input().split()
    if oper == 'E':
        break
    print("Case %s: " %i, end="")
    s = str(eval(n1 + oper + n2)).lower()
    print(s)
    i += 1

```