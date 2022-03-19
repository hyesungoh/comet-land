---
title: 'BOJ-7575 - Python'
date: 2020-11-30 12:21:13
category: 'Algorithm'
draft: false
---
수열의 수 n과 확인할 수열의 길이 k를 입력받은 후, 각 수열의 길이, 수열을 입력받는다. k 길이만큼의 반복되는 부분 수열과 해당 부분 수열을 거꾸로한 것이 모든 수열에 존재 시 YES를, 아닐 시 NO를 출력하는 문제. 제일 짧은 수열을 기준으로 k 길이만큼 슬라이싱 후 KMP 알고리즘을 통해 수열에 확인하는 지 확인하여 풀었다. 자세한 설명은 주석을 참고.
```python
import sys
input = sys.stdin.readline

def KMP(text, suspect):
    lt = len(text)
    ls = len(suspect)

    i = 0
    j = 0
    while i < lt:
        if text[i] == suspect[j]:
            i += 1
            j += 1
        elif text[i] != suspect[j]:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

        if j == ls:
            # 동일한 부분이 존재 시 return
            return True
    # 없을 시
    return False

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


n, k = map(int, input().split())
text_list = []
min_n, min_index = 0, 0

for i in range(n):
    t_len = int(input())
    # 제일 짧은 수열의 길이와 인덱스를 저장
    if min_n < t_len:
        min_n = t_len
        min_index = i

    text_list.append(input().split())

# 0부터 제일 짧은 수열의 길이 - k + 1만큼 반복
for i in range(0, len(text_list[min_index])-k+1):
    # i부터 k 길이를 갖도록 슬라이싱
    suspect = text_list[min_index][i:i+k]
    # LPS 계산하여 저장
    lps = [0 for _ in range(k)]
    getLPS(suspect, lps)

    # 정답 여부를 확인 할 변수 ans
    ans = 0

    # 다른 문자열들을 기준으로 반복
    for text_index in range(n):
        # 제일 짧은 문자열과 동일 시 확인하지 않음
        if text_index == min_index:
            continue
        # suspect 수열과 동일한 부분이 존재 시
        if KMP(text_list[text_index], suspect):
            ans += 1
        # suspect 수열을 반대로 한 것과 동일한 부분이 존재 시
        elif KMP(text_list[text_index], list(reversed(suspect))):
            ans += 1

    # 다른 문자열들 모두 동일한 수열이 존재할 시
    if ans == n-1:
        print("YES")
        sys.exit(0)
print("NO")

```