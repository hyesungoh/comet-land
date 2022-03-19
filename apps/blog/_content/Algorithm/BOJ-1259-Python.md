---
title: 'BOJ-1259 - Python'
date: 2020-12-16 12:21:13
category: 'Algorithm'
draft: false
---
입력되는 수들이 팰린드롬 형식인지 여부를 출력하는 문제. 문자열의 길이를 이용하여 반복문을 수행하여 풀었다.
```python
def isPalin(s):
    length = len(s)
    mid = length // 2
    for i in range(mid):
        if s[i] != s[length - i - 1]:
            return "no"
    return "yes"

while True:
    s = input()
    if s == "0":
        break

    print(isPalin(s))

```