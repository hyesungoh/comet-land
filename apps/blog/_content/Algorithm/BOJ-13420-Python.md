---
title: 'BOJ-13420 - Python'
date: 2020-07-06 12:21:13
category: 'Algorithm'
draft: false
---
숫자 n만큼 '2 + 2 = 4'와 같은 수식을 입력받고 정답이 맞을 때와 아닐 때 출력을 나눠 하는 문제. 문자열 형식을 실행하는 eval() 메소드를 이용하여 풀었다.
```python
for _ in range(int(input())):
    s, a = input().split('=')
    print("correct") if eval(s) == int(a) else print("wrong answer")

```