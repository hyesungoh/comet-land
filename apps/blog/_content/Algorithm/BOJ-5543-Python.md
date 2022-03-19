---
title: 'BOJ-5543 - Python'
date: 2020-06-23 12:21:13
category: 'Algorithm'
draft: false
---
5개의 수를 입력받고, 각 3개, 2개 중 제일 작은 수를 더한 값에 50을 뺀 값이 정답인 단순 구현문제, lambda를 쓸 생각은 했지만 접근 방법이 달랐던 것 같다. min 함수를 쓸 생각은 했다는 것에 일단 만족
```python
# b, n = 2000, 2000
# b = min(b, int(input()))
# b = min(b, int(input()))
# b = min(b, int(input()))
# n = min(n, int(input()))
# n = min(n, int(input()))
# print(b+n-50)

i = lambda:int(input())
b = min(i(), i(), i())
n = min(i(), i())
print(b+n-50)

```