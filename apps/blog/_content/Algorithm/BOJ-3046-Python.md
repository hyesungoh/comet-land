---
title: 'BOJ-3046 - Python'
date: 2020-07-11 12:21:13
category: 'Algorithm'
draft: false
---
a + X / 2 = b일 때, a와 b를 입력받고 X를 구하는 문제. b\*2-a하여 간단히 풀었다.
```python
a, b = map(int, input().split())
print((b * 2) - a)

```