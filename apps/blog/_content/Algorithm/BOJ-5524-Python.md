---
title: 'BOJ-5524 - Python'
date: 2020-07-06 12:21:13
category: 'Algorithm'
draft: false
---
숫자 n만큼 대문자와 소문자가 섞여있는 문자열을 입력받고 모든 문자열을 소문자로 출력하는 문제. 문자열의 lower() 메소드를 이용하여 풀었다.
```python
for _ in range(int(input())):
    print(input().lower())

```