---
title: '프로그래머스-조이스틱 - Python'
date: 2021-3-9 12:21:13
category: 'Algorithm'
draft: false
---
맨 처음 A로만 이루어진 문자열이 있다. 해당 문자열을 주어진 문자열로 바꿀 때, 다음 알파벳, 이전 알파벳, 커서 왼쪽으로 이동, 오른쪽으로 이동의 명령이 가능할 때 명령의 최솟값을 출력하는 문제. 첫 풀이는 모든 문자에 대해서 앞으로 이동했을 때와 뒤로 이동했을 때의 값을 비교해서 가장 작은 값을 할당하였다. 그 후에 왼쪽으로 한칸씩 이동하며 남은 칸의 수가 A로만 이루어져 있는 지를 확인해서 이동하는 값, 오른쪽으로 한칸씩 이동하며 이동한 값 중 작은 값을 더해 풀었다. 이렇게 풀었을 때 프로그래머스 상에서 마지막 반례만 틀렸습니다 결과가 나오게 되는데 "BBAAAAB"와 같은 왼쪽으로 가고 오른쪽으로 다시가야되는 경우가 반례인 것 같다. 다른 사람의 풀이를 참고해서 왼쪽, 오른쪽의 값이 0일 때까지 값을 더해서 더욱 작은 값으로 이동하여 위 반례를 해결하였다.
```python
# def solution(name):
#     def isAllZero(start, end):
#         for i in range(start, end):
#             if changes[i] != 0: return False
#         return True
#
#     length = len(name)
#     changes = [0 for _ in range(length)]
#     for i in range(length):
#         n = ord(name[i])
#         t1 = n - 65
#         t2 = abs(90 - n + 1)
#         changes[i] = min(t1, t2)
#     s = sum(changes)
#
#     search_left = 0
#     for i in range(length):
#         if isAllZero(i, length): break
#         search_left += 1
#
#     search_right = 0
#     for i in range(length, -1, -1):
#         if isAllZero(1, i): break
#         search_right += 1
#
#     print(s)
#     print(search_left)
#     print(search_right)
#     return min(search_left, search_right) + s
#
#     # print(ord("A")) 65
#     # print(ord("X")) 90
#
# n = "BBAAAAAAAAB"
# print(solution(n))


def solution(name):
    length = len(name)
    changes = [0 for _ in range(length)]
    for i in range(length):
        n = ord(name[i])
        t1 = n - 65
        t2 = abs(90 - n + 1)
        changes[i] = min(t1, t2)

    index = 0
    answer = 0
    while True:
        answer += changes[index]
        changes[index] = 0
        if sum(changes) == 0: return answer

        left, right = 1, 1
        while changes[index - left] == 0:
            left += 1
        while changes[index + right] == 0:
            right += 1
        answer += left if left < right else right
        index += -left if left < right else right

```