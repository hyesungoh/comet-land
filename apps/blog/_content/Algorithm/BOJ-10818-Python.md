---
title: 'BOJ-10818 - Python'
date: 2020-08-10 12:21:13
category: 'Algorithm'
draft: false
---
태국은 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다. 불기 연도를 입력받은 후 서기 연도를 출력하는 문제. 543년 차이가 나기 때문에 간단한 사칙연산을 이용하여 풀었다.
```python
input()
l = list(map(int, input().split()))
print(min(l), max(l))

```