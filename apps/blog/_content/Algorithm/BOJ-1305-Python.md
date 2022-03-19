---
title: 'BOJ-1305 - Python'
date: 2020-11-30 12:21:13
category: 'Algorithm'
draft: false
---
길이가 n인 전광판에 광고 문구가 반복되어 나타나 있다고 한다. 이 때 광고 문구의 최소 길이를 출력하는 문제. KMP 알고리즘을 공부하며 배웠던 LPS를 이용하였다. 주어진 문자열을 이용하여 LPS 배열을 만든 후 `n - lps[n-1]`을 계산하여 출력하여 풀었다.
```python
def getLPS(t, lps):
    leng = 0
    i = 1

    while i < len(t):
        if t[i] == t[leng]:
            leng += 1
            lps[i] = leng
            i += 1

        else:
            if leng != 0:
                leng = lps[leng-1]

            else:
                lps[i] = 0
                i += 1
n = int(input())
t = input()
lps = [0 for _ in range(n)]
getLPS(t, lps)
ans = n - lps[n-1]
print(ans)

```