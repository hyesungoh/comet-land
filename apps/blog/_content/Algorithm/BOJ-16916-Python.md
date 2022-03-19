---
title: 'BOJ-16916 - Python'
date: 2020-12-1 12:21:13
category: 'Algorithm'
draft: false
---
문자열 s와 p를 입력받은 후 s안에 p가 있을 시 1을, 없을 시 0을 출력하는 문제. KMP 알고리즘을 이용하여 풀었으며 한 번 찾은 후 연산을 종료하도록 하였다.
```python
def KMP(s, p):
    ls = len(s)
    lp = len(p)
    lps = [0 for _ in range(lp)]
    getLPS(p, lps)

    i = 0
    j = 0
    while i < ls:
        if s[i] == p[j]:
            i += 1
            j += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

        if j == lp:
            return 1
    return 0

def getLPS(p, lps):
    leng = 0
    i = 1
    while i < len(p):
        if p[i] == p[leng]:
            leng += 1
            lps[i] = leng
            i += 1
        else:
            if leng != 0:
                leng = lps[leng-1]
            else:
                lps[i] = 0
                i += 1

s = input()
p = input()
print(KMP(s, p))

```