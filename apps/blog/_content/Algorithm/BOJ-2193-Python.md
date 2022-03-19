---
title: 'BOJ-2193 - Python'
date: 2020-11-14 12:21:13
category: 'Algorithm'
draft: false
---
2진수 중에 처음이 1로 시작하며 1과 1이 붙어있지 않은 수를 이친수라 할 때, n자리수에 이친수가 몇 개가 있는 지 출력하는 문제. 첫번째 풀이는 반복문을 이용하여 i-1 자리수가 0일 때 1로 수정하여 집합 자료형에 추가하는 방식으로 하였으나 수가 커질 때는 연산의 수가 많아져 이 방법은 포기하게 되었다. 고민 중 이친수의 수가 피보나치 수와 같다는 것을 깨닫고 피보나치 수를 반환하는 함수를 만들어 풀었다.
```python
# 2193
# n = int(input())
# if n <= 2:
#     print(1)
#     exit(0)
#
# first = ('1' + ('0' * (n-1)))
# s = {first}
#
# for i in range(n-1, 1, -1):
#     temp = list(first)
#     if temp[i - 1] == '0':
#         temp[i] = '1'
#         s.add(''.join(temp))
#
#     for j in range(n-1, i-1, -1):
#         if temp[j - 1] == '0':
#             temp[j] = '1'
#             s.add(''.join(temp))
#             temp[j] = '0'
#             continue
# print(len(s))

def f(n):
    if n <= 2:
        return 1
    o, t = 1, 1
    for _ in range(n-2):
        temp = o + t
        o = t
        t = temp
    return temp


n = int(input())
print(f(n))

```