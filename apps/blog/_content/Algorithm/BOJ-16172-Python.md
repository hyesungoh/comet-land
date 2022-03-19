---
title: 'BOJ-16172 - Python'
date: 2021-1-20 12:21:13
category: 'Algorithm'
draft: false
---
숫자와 알파벳 대, 소문자로 이루어진 s에서 숫자를 지운 후 문자열 k가 있을 시 1, 없을 시 0을 출력하는 문제. s에서 k가 여러 개 있는 것을 확인하는 문제였으면 KMP 알고리즘을 사용하여 풀었을테지만 단순히 연속된 문자열이 있는 지 판단하는 문제라 첫 번째 풀이는 isdigit을 이용하여 숫자를 제외한 문자열을 만든 후 in 메소드를 사용하여 풀었다. 두 번째 풀이는 isdigit으로 확인이 아닌 0부터 9까지의 문자열을 기준으로 replace하여 풀었다. replace가 더욱 느릴 거 같아서 isdigit을 이용하여 풀었으나 아니였다. 역시 내장라이브러리가 짱인가보다.
```python
# s = input()
# k = input()
#
# no_num_s = []
# for i in s:
#     if not i.isdigit():
#         no_num_s.append(i)
# no_num_s = "".join(no_num_s)
#
# print(1 if k in no_num_s else 0)

s = input()
k = input()
for i in "0123456789":
    s = s.replace(i, "")
print(1 if k in s else 0)

```