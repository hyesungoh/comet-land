---
title: 'BOJ-10266 - Python'
date: 2020-12-15 12:21:13
category: 'Algorithm'
draft: false
---
360000의 크기를 갖는 시계에 n개의 시계바늘이 있다. 동일한 시계 바늘을 갖고 있는 시계의 시계 바늘 각도가 주어질 때, 시계를 돌렸을 때 같은 시각을 나타낼 수 있는 지 여부를 출력하는 문제. 360000의 길이를 0으로 이루어진 배열 두개를 만든 후 각 시계마다 입력되는 각도를 1로 변경하였다. 한 시계의 배열을 2배로 한 것에 KMP 알고리즘을 이용하여 다른 시계 배열을 찾았으며 찾을 시와 못찾았을 시를 나누어 출력하여 풀었다.
```python
MAX = 360000

def KMP(ori, pat):
    i = 0
    j = 0
    lps = getLPS(pat)
    while i < MAX*2:
        if ori[i] == pat[j]:
            i += 1
            j += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

        if j == MAX:
            return "possible"
    return "impossible"


def getLPS(pat):
    i = 1
    leng = 0
    lps = [0 for _ in range(MAX)]
    while i < MAX:
        if pat[i] == pat[leng]:
            leng += 1
            lps[i] = leng
            i += 1
        else:
            if leng != 0:
                leng = lps[leng-1]
            else:
                lps[i] = 0
                i += 1
    return lps

def checkin(p):
    l = list(map(int, input().split()))
    for i in l:
        p[i] = 1


pat = [0 for _ in range(MAX)]
ori = [0 for _ in range(MAX)]

n = int(input())
checkin(pat)
checkin(ori)
print(KMP(ori*2, pat))

```