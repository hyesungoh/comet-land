---
title: 'BOJ-1759 - Python'
date: 2021-3-18 12:21:13
category: 'Algorithm'
draft: false
---
l개의 문자중에서, c개의 문자열로 이루어진 암호를 만드는 문제. 해당 문자열은 알파벳이 오름차순이 되어야하며, 1개 이상의 모음, 2개 이상의 자음으로 이루어져 있어야하는 조건이 있다. 백트래킹 방식을 이용하여 모든 알파벳이 중복되지 않으며 오름차순으로 담길 수 있도록 하였다. 길이가 c가 될 시 모음과 자음의 수를 세는 함수를 만들어 통과할 시 출력하도록 풀었다.
```python
import sys
sys.setrecursionlimit(10**6)

def check(word):
    vowel_cnt = 0
    cont_cnt = 0

    for w in word:
        if w in ['a', 'e', 'i', 'o', 'u']: vowel_cnt += 1
        else: cont_cnt += 1

        if vowel_cnt >= 1 and cont_cnt >= 2: return True
    return False


def bt(depth, temp_word):
    if depth == l:
        if check(temp_word):
            print("".join(temp_word))
        return

    for i in range(c):
        if not visit[i] and (not temp_word or temp_word[-1] < words[i]):
            visit[i] = True
            temp_word.append(words[i])
            bt(depth+1, temp_word)

            visit[i] = False
            temp_word.pop()

l, c = map(int, input().split())
words = sorted(input().split())
visit = [False for _ in range(c)]
bt(0, [])

```