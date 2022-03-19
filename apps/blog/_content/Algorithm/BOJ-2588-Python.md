---
title: 'BOJ-2588 - Python'
date: 2020-06-16 12:21:13
category: 'Algorithm'
draft: false
---
간단한 문제, input을 어떻게 사용하는 지 까먹은 내가 레전드.조금 더 잘 풀어볼 수 있을 거 같다.
```python
x = int(input())
y = input()
for i in reversed(list(y)):
    print(x * int(i))
print(x * int(y))

```