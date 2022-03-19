---
title: 'BOJ-9093 - Python'
date: 2020-08-03 12:21:13
category: 'Algorithm'
draft: false
---
숫자 n과 n개의 문자열을 입력받는다. 문자열의 공백을 기준으로 단어별 거꾸로 출력하는 문제. 파이썬의 reversed를 이용하여 풀었다.
```python
for _ in range(int(input())):
    s = input().split()
    for w in s:
        print(''.join(reversed(w)), end=" ")
    print("")

```