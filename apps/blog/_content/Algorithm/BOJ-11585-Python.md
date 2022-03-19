---
title: 'BOJ-11585 - Python'
date: 2020-12-15 12:21:13
category: 'Algorithm'
draft: false
---
환형 문자열에서 특정 문자열을 찾아 나올 수 있는 확률을 기약 분수 형태로 출력하는 문제. 두 문자열을 입력받은 후 한 문자열을 2배로 한 후, 마지막 문자를 제거한 문자열에서 다른 문자열을 KMP 알고리즘을 이용하여 찾도록 풀었다. 마지막 문자를 제거하는 이유는 입력되는 문자열이 동일 시 추가적으로 한 개가 더 늘기 때문이다. 기약분수화는 fractions의 Fraction을 이용하였으며 모든 경우에서 찾을 수 있을 때 1로 나오는 것을 예외처리하여 풀었다.
```python
from fractions import Fraction

def KMP(ori, pat):
    lt = n * 2 - 1
    lp = n
    lps = getLPS(pat, n)

    ans = 0

    i = 0
    j = 0
    while i < lt:
        if ori[i] == pat[j]:
            i += 1
            j += 1
        elif ori[i] != pat[j]:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

        if j == lp:
            ans += 1
            j = lps[j-1]

    return ans

def getLPS(pat, length):
    lps = [0 for _ in range(length)]

    j = 0
    i = 1
    while i < length:
        if pat[i] == pat[j]:
            j += 1
            lps[i] = j
            i += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                lps[i] = 0
                i += 1
    return lps

n = int(input())
pat = input().replace(' ', '')
origin = input().replace(' ', '') * 2

kmp = KMP(origin[:n*2-1], pat)
frac = Fraction(kmp, n)
print("1/1" if frac == 1 else frac)

```