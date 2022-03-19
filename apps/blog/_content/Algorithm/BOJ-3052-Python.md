---
title: 'BOJ-3052 - Python'
date: 2020-06-26 12:21:13
category: 'Algorithm'
draft: false
---
입력받는 10개의 수들을 42로 나눈 나머지 값이 겹치지 않게 몇 개인지 출력하는 문제.중복되는 요소가 없는 set 자료형을 이용하여 간편하게 풀었다.
```python
s = set()
for _ in range(10):
    s.add(int(input()) % 42)
print(len(s))

```