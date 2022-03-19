---
title: 'BOJ-14681 - Python'
date: 2020-06-22 12:21:13
category: 'Algorithm'
draft: false
---
두 수를 입력받고 어느 사분면에 속하는 지 출력하는 문제, 변수를 사용하지 않고 if문에 input을 사용했다.
```python
if int(input()) > 0:
    if int(input()) > 0:
        print("1")
    else:
        print("4")
else:
    if int(input()) > 0:
        print("2")
    else:
        print("3")

```