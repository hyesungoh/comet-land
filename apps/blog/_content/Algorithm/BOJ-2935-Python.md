---
title: 'BOJ-2935 - Python'
date: 2020-07-06 12:21:13
category: 'Algorithm'
draft: false
---
10의 제곱 형태인 두 수와 +, _ 중 하나를 입력받고 연산된 수를 출력하는 문제. 첫 풀이에서는 연산 속도를 위해 _ 일 때 두 수의 0을 세어 더한 값 A를 '1', '0' \* A해서 풀었다. 두 번째 풀이는 eval을 이용하여 숏코딩 스타일로 풀었다.
```python
n1 = input()
s = input()
n2 = input()
if s == "*":
    print('1', end='')
    print('0' * (n1.count('0') + n2.count('0')))
else:
    print(int(n1) + int(n2))

# i=input
# print(eval(i()+i()+i()))

```