---
title: 'BOJ-1850 - Python'
date: 2021-2-5 12:21:13
category: 'Algorithm'
draft: false
---
두 수 n, m을 입력받은 후 각 수만큼 1로 이루어진 수의 최대공약수를 출력하는 문제. 첫 풀이는 1로 만든 수를 이용하여 유클리드 호제 방법을 이용하여 풀었으나 메모리초과 결과를 받게 되었다. 1로 바꾸지 않은 최대공약수의 규칙을 보니 해당 수를 1로 바꾸면 정답이 되는 것을 찾아 풀었다.
```python
# a, b = map(lambda x: int("1" * int(x)), input().split())
a, b = map(int, input().split())
while b != 0: a, b = b, a % b
print("1" * a)

```