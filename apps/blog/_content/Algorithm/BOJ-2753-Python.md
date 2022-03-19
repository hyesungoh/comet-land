---
title: 'BOJ-2753 - Python'
date: 2020-06-17 12:21:13
category: 'Algorithm'
draft: false
---
윤년인지 확인하는 문제, 단순히 문제에서 말해준 규칙을 if문으로 나열해 풀었다. 이게 최선인가?
```python
n = int(input())
if n % 400 == 0:
    print("1")
elif n % 4 == 0 and n % 100 != 0:
    print("1")
else:
    print("0")

```