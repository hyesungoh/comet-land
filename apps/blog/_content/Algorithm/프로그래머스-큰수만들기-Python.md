---
title: '프로그래머스-큰수만들기 - Python'
date: 2021-2-27 12:21:13
category: 'Algorithm'
draft: false
---
문자열로 이루어진 정수가 주어진다. 해당 정수의 형태를 유지하여 k개의 숫자를 빼어 만들 수 있는 가장 큰 수를 출력하는 문제. 첫 번째 풀이는 백트래킹 방법을 이용하여 모든 경우의 수를 set 자료형에 저장하여, 제일 큰 값을 출력하여 풀었지만 시간초과 결과를 받게 되었다. 두 번째 풀이는 스택을 이용한 풀이로, 스택의 마지막 값들과 현재 반복중인 값을 비교하여 k를 감소, 스택에서 제외한 후 현재 반복중이였던 값을 스택에 추가한다. 앞에서부터 큰 수들이 들어감으로써 k가 0이 되지 않았을 시 감소한 k만큼 뒤에서 잘라주어 반환하여 풀었다.
```python
# def bt(n, depth, k, visit, answer, answers):
#     if depth == k:
#         t = "".join(answer)
#         answers.add(int(t))
#         return
#
#     for i in range(n):
#         if not visit[i]:
#             t = answer[i]
#             answer[i] = ""
#             visit[i] = True
#
#             bt(n, depth+1, k, visit, answer, answers)
#
#             answer[i] = t
#             visit[i] = False
#
# def solution(number, k):
#     n = len(number)
#     number = list(number)
#     visit = [False for _ in range(n)]
#     answers = set()
#     bt(n, 0, k, visit, number, answers)
#     return str(max(answers))
#
# print(solution(n, k))


nn = "4177252841"
k = 4

def solution(number, k):
    stack = []
    for n in number:
        while stack and stack[-1] < n and k > 0:
            k -= 1
            stack.pop()
        stack.append(n)

    if k != 0: stack = stack[:-k]
    return "".join(stack)

print(solution(nn, k))

```