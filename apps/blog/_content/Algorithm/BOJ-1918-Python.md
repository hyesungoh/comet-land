---
title: 'BOJ-1918 - Python'
date: 2020-11-13 12:21:13
category: 'Algorithm'
draft: false
---
일반적으로 사용하는 중위 표기식을 입력받은 후. 해당 식을 후위 표기식으로 만든 후 출력하는 문제. 입력된 문자열을 괄호로 감싸 반복문을 수행하고 반복 수행중인 값이 isupper을 이용하여 대문자일 때 출력. '('일 때 스택에 추가. ')'일 때 스택을 pop한 값이 '('일 때까지 출력한다. 그리고 연산자일 때 스택의 마지막 값이 '('가 아니며 스택의 마지막 값을 딕셔너리에 저장된 우선순위로 비교하여 현재 연산자보다 우선순위가 높은 연산자들을 먼저 출력 후 해당 연산자를 스택에 append하여 풀었다.
```python
s = input()
stack = []
priority = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
    '(': 0
}

for ch in '('+s+')':
    if ch.isupper():
        print(ch, end="")

    elif ch == "(":
        stack.append(ch)

    elif ch == ")":
        while True:
            c = stack.pop()
            if c == "(":
                break
            print(c, end="")
    else:
        while stack[-1] != "(" and priority[stack[-1]] >= priority[ch]:
            print(stack.pop(), end="")
        stack.append(ch)

```