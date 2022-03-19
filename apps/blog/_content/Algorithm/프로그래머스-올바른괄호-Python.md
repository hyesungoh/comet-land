---
title: '프로그래머스-올바른괄호 - Python'
date: 2021-2-25 12:21:13
category: 'Algorithm'
draft: false
---
괄호가 바르게 짝지어졌다는 것은 ( 문자로 열렸으면 반드시 짝지어서 )로 닫혀야 한다는 뜻이다. 괄호로만 이루어진 문자열이 주어졌을 때 올바른 괄호이면 True를, 아닐 때 False를 반환하는 문제. 문자열의 각 문자가 )일 때 -1, (일 때 1을 더하는 정수형 변수를 이용하여 해당 변수가 0과 같은 지를 반환하며 반복문 중에 해당 변수가 0이며 )일 시 False를 반환하여 풀었다.
```python
def solution(s):
    answer = False
    balance = 0

    for t in s:
        if t == ")" and balance == 0:
            return False
        balance += -1 if t == ")" else 1
        answer = balance == 0

    return answer

```