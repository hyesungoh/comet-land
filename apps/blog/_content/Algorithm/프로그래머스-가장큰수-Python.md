---
title: '프로그래머스-가장큰수 - Python'
date: 2021-2-21 12:21:13
category: 'Algorithm'
draft: false
---
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 구하는 문제. 첫 번째 풀이는 백트래킹 방법을 이용하여 모든 경우의 수를 한 배열에 저장하여 해당 수 중 제일 큰 수를 출력하도록 풀었으나, 입력될 수 있는 수가 최대 100,000개임으로 시간초과 결과를 받게 되었다. 그리디 방법을 이용할려 했으나, 문자열을 기준으로 정렬시에 30과 3의 정렬에서 차질이 생겨 고민 중, 정렬 기준을 문자열화 한 것의 3을 곱한 풀이를 보았다. 303030과 333을 정렬하여 333이 더욱 높게 판단되게 하여 풀었다.
```python
# import sys
# sys.setrecursionlimit(10**9)

# def bt(depth, now, length, numbers, visit, answers):
#     if depth == length:
#         answers.append(now)
#         return
#
#     for i in range(length):
#         if not visit[i]:
#             visit[i] = True
#             bt(depth+1, now+numbers[i], length, numbers, visit, answers)
#             visit[i] = False
#
#
# def solution(numbers):
#     n = len(numbers)
#     numbers = list(map(str, numbers))
#     visit = [False for _ in range(n)]
#     answers = []
#     bt(0, "", n, numbers, visit, answers)
#     answers = list(map(int, answers))
#     print(answers)
#     return str(max(answers))


def solution(numbers):
    numbers = sorted(map(str, numbers), key=lambda x: x*3, reverse=True)
    return str(int("".join(numbers)))

l = [3, 30, 34, 5, 9]
print(solution(l))

```