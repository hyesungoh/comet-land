---
title: 'BOJ-2475 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
5가지 수를 입력받은 후 각 수를 제곱한 수들의 합에 10으로 나눈 나머지를 출력하는 문제. 함수를 만들어서 풀었다.
```python
def sq(n):
    return n**2
a,b,c,d,e = map(int, input().split())
print((sq(a)+sq(b)+sq(c)+sq(d)+sq(e))%10)

```