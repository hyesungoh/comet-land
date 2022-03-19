---
title: 'BOJ-1339 - Python'
date: 2020-11-9 12:21:13
category: 'Algorithm'
draft: false
---
n개의 알파벳으로 이루어진 문장을 입력받는다. 각 알파벳을 숫자로 바꾼 후 합하였을 때 최대값이 무엇인지 출력하는 문제. 첫 풀이는 문자열을 거꾸로 배열에 삽입한 후 자리수가 클 수록 알파벳에 해당되는 수가 커야하는 것을 이용하여 딕셔너리에 저장 여부를 확인하여 값을 할당 후 배열에 값 수정을 하였다. 그 후 배열을 뒤집어 int형으로 형변환하여 더한 값을 출력하여 풀었다. 하지만 자리수 이외에 빈도수 또한 중요도에 영향을 미치기 때문에 틀렸습니다 결과를 받게 되었다. 두번째 풀이는 길이 26의 배열을 만든 후 문자열의 자릿수 만큼 해달 배열의 값을 더해주어 중요도를 저장, 내림차순으로 정렬한 배열에 9부터 중요도를 곱하여 더한 값을 출력하여 풀었다.
```python
# 1339
# n = int(input())
# l = [[0 for _ in range(10)] for _ in range(n)]
# d = {}
# index = 9
#
# for i in range(n):
#     s = input()
#     ls = len(s)
#     for j in range(ls):
#         l[i][ls-j-1] = s[j]
#
# for i in range(9, -1, -1):
#     for y in range(n):
#         if l[y][i] != 0 and l[y][i] not in d:
#             d[l[y][i]] = index
#             l[y][i] = index
#
#             index -= 1
#         elif l[y][i] in d:
#             l[y][i] = d[l[y][i]]
#
# ans = 0
# for i in range(n):
#     rev_l = list(reversed(l[i]))
#     s = ''.join(map(str, rev_l))
#     ans += int(s)
#
# print(ans)

n = int(input())
l = []; ans = 0
alpha = [0 for _ in range(26)]

for _ in range(n):
    l.append(input())

for s in l:
    i = 0
    while s:
        now = s[-1]
        alpha[ord(now) - ord('A')] += pow(10, i)
        i += 1; s = s[:-1]

alpha.sort(reverse=True)
for i in range(9, 0, -1):
    ans += alpha[9-i] * i
print(ans)

```