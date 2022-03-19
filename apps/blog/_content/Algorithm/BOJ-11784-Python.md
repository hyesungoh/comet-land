---
title: 'BOJ-11784 - Python'
date: 2020-07-17 12:21:13
category: 'Algorithm'
draft: false
---
1000줄 이하의 16진수로 된 문자열을 입력받은 후 이를 영어로 디코딩하여 출력하는 문제. sys.stdin.read를 이용하여 eof까지 읽어왔으며 .split('\n')을 이용하여 줄바꿈마다 나눠준 후 나눠진 각 문자열들을 bytearray.fromhex(str).decode()을 이용하여 번역 후 출력하였다.
```python
import sys
s = sys.stdin.read()
l = s.split("\n")
l.remove("")
for i in l:
    print(bytearray.fromhex(i).decode())

```