---
title: 'BOJ-4949 - Python'
date: 2021-3-23 12:21:13
category: 'Algorithm'
draft: false
---
영문 알파벳, 공백, 소괄호, 대괄호, 온점으로 이루어진 문자열을 입력받는다. 해당 문자열이 소괄호, 대괄호에 대해서 균형을 이루고 있으면 "yes"를, 아닐 시 "no"를 출력하는 문제. 스택을 이용하여 풀었으며 괄호를 여는 문자일 시 스택에 추가, 닫는 문자일 시 스택의 마지막 값과 비교하여 pop하거나 break하여 풀었다. 소괄호 대괄호를 비교하는 데 딕셔너리 자료형을 이용하였으며 반복문이 종료시에도 스택에 괄호가 남아있는 경우도 예외처리하여 풀었다.
```python
import sys
input = sys.stdin.readline

braket_fair = {")": "(", "]": "["}

while True:
    stack = []
    answer = True
    string = input().rstrip()

    if string == ".": break

    for word in string:
        if word == "(" or word == "[": stack.append(word)
        elif word == ")" or word == "]":
            if stack and stack[-1] == braket_fair[word]:
                stack.pop()
            else:
                answer = False
                break

    if len(stack) != 0: answer = False
    print("yes" if answer else "no")

```