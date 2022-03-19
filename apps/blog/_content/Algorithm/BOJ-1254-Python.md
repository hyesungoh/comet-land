---
title: 'BOJ-1254 - Python'
date: 2020-08-29 12:21:13
category: 'Algorithm'
draft: false
---
문자열 s를 입력받은 후 문자열의 뒤부터 0개 이상의 단어를 추가해서 만들 수 있는 펠린드롬 단어중 제일 짧은 단어의 길이를 출력하는 문제. 내 풀이는 펠린드롬 인지를 확인하는 함수를 만든 후, 문자열의 길이만큼 반복문을 수행하며 s에 s[0:i+1]을 reversed하여 더한 문자열을 펠린드롬 확인 함수를 사용하여 정답을 출력하였다. <i>1234 + 1 > 1234 + 21 > 1234 + 321 </i> 다른 사람의 풀이는 s를 앞에서부터 슬라이싱한 값에 reversed한 문자열이 있는 지 확인하는 방식이다.
```python
# 1254
def ispalin(s):
    len_s = len(s)
    for i in range(len_s // 2):
        if s[i] != s[len_s-i-1]:
            return False
    return True

s = input()

if ispalin(s):
    print(len(s))
    exit(0)

for i in range(len(s)):
    t = s + ''.join(reversed(s[0:i+1]))

    if ispalin(t):
        print(len(t))
        exit(0)

# s = input()
# n = len(s)
# for i in range(n):
#     if s[i:] in s[i:][::-1]:
#         print(n + i)
#         break

```