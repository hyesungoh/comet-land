---
title: 'BOJ-5555 - Python'
date: 2020-10-16 12:21:13
category: 'Algorithm'
draft: false
---
길이가 최대 10인 문자열이 s가 입력되며 n만큼 길이가 최대 10인 문자열들 l이 입력된다. l의 문자열은 끝에서부터 처음으로 이어서 읽을 수 있을 때 s가 들어있는 l의 수를 출력하는 문제. s의 길이가 더욱 클 수 있다면 s의 길이에 따라 l을 계속 곱해야겠지만 둘의 최대 길이가 같다. 그렇기 때문에 l \* 2한 값에 s가 있는지 in을 사용하여 간단히 풀었다.
```python
# 5555
# import sys
# input = sys.stdin.readline
#
# s = input()[0:-1]
# ans = 0
# for _ in range(int(input())):
#     l = input()[0:-1] * 2
#     if s in l: ans += 1
# print(ans)

s = input()
ans = 0
for _ in range(int(input())):
    l = input() * 2
    if s in l: ans += 1
print(ans)

```