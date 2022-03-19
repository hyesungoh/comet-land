---
title: '프로그래머스-완주하지못한선수 - Python'
date: 2021-3-8 12:21:13
category: 'Algorithm'
draft: false
---
마라톤에 참여한 사람의 이름, 완주한 사람의 이름으로 이루어진 두 배열이 주어질 때 완주하지 못한 사람을 반환하는 문제. 동명이인이 있는 경우가 있어 딕셔너리 자료형을 이용해 value 값을 정수형 변수로 저장, 동일 시 증가하였다. 완주자에 대해서 값을 1씩 뺀 후, 값이 1 이상인 key 값을 반환하여 풀었다. 다른 사람의 풀이를 참고하여 정답이 한명인 경우인 것을 이용, 두 배열을 정렬하여 다를 시 반환하는 방법으로도 풀었다.
```python
def solution(part, comp):
    dict = {}
    for per in part:
        if per in dict: dict[per] += 1
        else: dict[per] = 1

    for per in comp: dict[per] -= 1

    for k, v in dict.items():
        if v > 0:
            return k

# def solution(part, comp):
#     part.sort()
#     comp.sort()
#
#     for i in range(len(part)):
#         if part[i] != comp[i]:
#             return part[i]
#     return part[-1]

```