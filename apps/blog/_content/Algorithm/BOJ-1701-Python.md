---
title: 'BOJ-1701 - Python'
date: 2020-11-30 12:21:13
category: 'Algorithm'
draft: false
---
문자열 s가 주어진 후 2번 이상 들어가는 부분문자열의 최대 길이를 출력하는 문제. 첫번째 풀이는 처음부터 s의 길이 -1부터 2까지 문자열을 슬라이싱하여 LPS를 계산 후 KMP 알고리즘을 이용하여 2번 이상 존재할 시 return 및 break를 이용하여 해당 결과를 출력하여 풀었다. 시간제한이 0.5초이며 처음부터 시작하기 때문에 시간초과 및 틀렸습니다 결과를 받았다. 문제의 2번 이상 존재하는 경우를 통해 LPS만을 이용하여 계산하면 될 것 같아 0부터 s의 길이만큼 index를 이동하여 슬라이싱한 값을 이용하여 LPS 중 최대값을 저장 및 갱신하여 풀었다.
```python
# def KMP(t, p, lps):
#     lt = len(t)
#     lp = len(p)
#     ans = 0
#     i = 0
#     j = 0
#     while i < lt:
#         if t[i] == p[j]:
#             i += 1
#             j += 1
#         elif t[i] != p[j]:
#             if j != 0:
#                 j = lps[j-1]
#             else:
#                 i += 1
#
#         if j == lp:
#             ans += 1
#             if ans >= 2:
#                 return True
#             j = lps[j-1]
#     return False
#
# def getLPS(p, lps):
#     leng = 0
#     i = 1
#
#     while i < len(p):
#         if p[i] == p[leng]:
#             leng += 1
#             lps[i] = leng
#             i += 1
#         else:
#             if leng != 0:
#                 leng = lps[leng-1]
#             else:
#                 lps[i] = 0
#                 i += 1
#
# s = input()
# ls = len(s)
# for i in range(ls-1, 1, -1):
#     pat = s[0:i]
#     lps = [0 for _ in range(i)]
#     getLPS(pat, lps)
#     if KMP(s, pat, lps):
#         print(i)
#         break


def getLpsMax(p):
    lps = [0 for _ in range(len(p))]
    leng = 0
    i = 1

    while i < len(p):
        if p[i] == p[leng]:
            leng += 1
            lps[i] = leng
            i += 1
        else:
            if leng != 0:
                leng = lps[leng - 1]
            else:
                lps[i] = 0
                i += 1
    return max(lps)

s = input()
ls = len(s)
ans = 0
for i in range(ls):
    p = s[i:ls]
    ans = max(getLpsMax(p), ans)
print(ans)

```