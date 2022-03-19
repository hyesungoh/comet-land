---
title: 'BOJ-10798 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
5개의 줄에 최대 길이가 15인 문자열이 입력된다. 이 문자열들을 세로로 읽으나 해당 자리의 글자가 없으면, 읽지 않고 그 다음 글자를 계속 읽는다는 조건을 지켜 공백없이 연속하여 출력하는 문제. 첫 풀이는 이중반복문과 try, except를 이용하여 풀었다. 두번째 풀이는 해당 문자열의 길이와 비교하여 출력 여부를 결정하도록 풀었다.
```python
# l = []
# for _ in range(5):
#     l.append(input())
# for i in range(15):
#     for j in range(5):
#         try:
#             print(l[j][i], end='')
#         except:
#             continue

# l = [input() for _ in range(5)]
# for i in range(15):
#     for j in range(5):
#         try: print(l[j][i], end='')
#         except: continue

l = [input() for _ in range(5)]
for i in range(15):
    for j in range(5):
        if len(l[j]) > i:
            print(l[j][i], end='')

```