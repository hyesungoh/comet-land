---
title: 'BOJ-17496 - Python'
date: 2020-08-11 12:21:13
category: 'Algorithm'
draft: false
---
작물을 판매할 수 있는 총 가격을 출력하는 문제. 입력받는 d, g, n, p는 각 기를 수 있는 일 수, 자라는 데 걸리는 일 수, 한 번에 심을 수 있는 수, 가격이다. 문제에서 처음 심는 날을 1일으로 정해놓았기 때문에 (d-1)//g*n*p를 계산하여 풀었다.
```python
# 일수 자라는일수 심을수있는수 가격
d,g,n,p=map(int, input().split())
print((d-1)//g*n*p)

```