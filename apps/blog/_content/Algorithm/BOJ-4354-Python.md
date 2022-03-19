---
title: 'BOJ-4354 - Python'
date: 2020-12-1 12:21:13
category: 'Algorithm'
draft: false
---
문자열 s가 주어진 후 어떤 문자열 a에 대하여 s = a^n으로 나타낼 때 가장 큰 n을 출력하는 문제. LPS를 이용하여 풀었으며 예제를 보는 중 식을 도출해 내어 풀게 되었다. s의 길이를 ls라 할 때 `ls // ls - lps[-1]`을 계산하여 풀었다. 하지만 lps의 마지막 값이 높으나 나누어 떨어지지 않는 예외가 있어 나누어 떨어지지 않을 때는 1을 출력하는 조건을 추가하여 풀었다.
```python
import sys
input = sys.stdin.readline

def getLPS(s, ls):
    lps = [0 for _ in range(ls)]

    leng = 0
    i = 1
    while i < ls:
        if s[i] == s[leng]:
            leng += 1
            lps[i] = leng
            i += 1
        else:
            if leng != 0:
                leng = lps[leng - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

while True:
    s = input().rstrip()
    if s == ".":
        break
    ls = len(s)
    lps = getLPS(s, ls)
    pat_len = ls - lps[-1]
    print(ls // pat_len if ls % pat_len == 0 else 1)

```