---
title: 'BOJ-2083 - Python'
date: 2020-10-21 12:21:13
category: 'Algorithm'
draft: false
---
이름과 키, 몸무게가 입력됐을 때 조건에 맞게 고급반, 초급반을 나누어 출력하는 문제. map과 비교 연산자를 이용하여 간단히 풀었다.
```python
while True:
    n, a, w = input().split()
    a, w = map(int, [a, w])
    if n == '#': break
    elif a > 17 or w >= 80:
        print(n, 'Senior')
    else:
        print(n, 'Junior')

```