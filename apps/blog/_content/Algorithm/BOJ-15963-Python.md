---
title: 'BOJ-15963 - Python'
date: 2020-08-14 12:21:13
category: 'Algorithm'
draft: false
---
한 문자열에 공백을 기준으로 두 개의 수를 입력받고 같으면 1 다르면 0을 출력하는 문제. split()과 삼항연산자를 이용하여 풀었다.
```python
a,b=input().split()
print(1 if a==b else 0)

```