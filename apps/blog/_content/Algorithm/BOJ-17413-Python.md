---
title: 'BOJ-17413 - Python'
date: 2020-08-04 12:21:13
category: 'Algorithm'
draft: false
---
<ab cd>abc<abc>와 같은 문자열이 입력됐을 때 <ab cd>cba<abc>같이 <>안의 문자열은 반대로 출력하지 않고 <>밖의 문자열은 반대로 출력하는 문제.문자열을 리스트화하여 반복문을 수행하고 현재 문자가 '<', '>', ' '일 때 예외를 두어 출력하고 그 외에 빈문자열에 문자를 계속 더하는 방법으로 풀었다
```python
# 문자열을 list로 만들어서 접
# s = input()
# t = ""
# for w in list(s):
#     t += w
#     if w is '>':
#         print(t, end="")
#         t = ""
#     elif '<' not in t and w == ' ':
#         # print(''.join(reversed(t)), end="")
#         print(t)
#         t = ""
#     elif w is None:
#         print("afff")

# 문자열 split으로 접근
# s = input().split()
# t = ""
# for w in s:
#     if '>' in w:
#         t += w
#         print(t, end="")
#         t = ""
#     elif '<' in w:
#         t += w
#     else:
#         print(''.join(reversed(w)), end="")

s = list(input())
t = ""
s.append(' ')

for w in s:
    if w is '<':
        print(''.join(reversed(t)), end='')
        t = '<'
    elif w is '>':
        t += '>'
        print(t, end='')
        t = ''
    elif w is ' ' and '<' not in t:
        print(''.join(reversed(t)), end='')
        print(' ', end='')
        t = ''
    else:
        t += w

```