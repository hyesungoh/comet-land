---
title: 'BOJ-10822 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
쉼표로 나누어져 있는 정수들로 이루어진 문자열의 총합을 구하는 문제. split(',')과 sum을 이용하여 풀었다.
```python
print(sum(map(int,input().split(','))))

```