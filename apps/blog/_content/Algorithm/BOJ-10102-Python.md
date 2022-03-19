---
title: 'BOJ-10102 - Python'
date: 2020-11-15 12:21:13
category: 'Algorithm'
draft: false
---
길이 n의 문자열은 A와 B로 이루어져 있으며 문자열을 이루고 있는 더 많은 알파벳을 출력하는 문제. str.count를 이용하여 풀었다.
```python
input()
s = input()
a, b = s.count("A"), s.count("B")
if a == b:
    print("Tie")
else:
    print("A" if a > b else "B")

```