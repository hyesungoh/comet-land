---
title: '프로그래머스-기능개발 - Python'
date: 2021-2-28 12:21:13
category: 'Algorithm'
draft: false
---
개발 진행도와 개발 속도, 두 배열을 입력받는다. 개발 진행도가 100 이상일 때 배포가 가능하며, 앞에 있는 것을 먼저 배포해야만 하며 뒤에 이미 개발 진행도가 100 이상인 것과 함께 배포가 된다. 각 배포마다 몇 개의 기닝이 배포되는 지를 반환하는 문제. 첫 번째 풀이는 for를 이용하여 각 기능들을, while을 이용해 days를 관리하여 풀었다. 두 번째 풀이는 입력받는 두 배열을 deque화한 후, while만을 이용하여 조건 충속시 popleft 되도록 풀었다.
```python
# def solution(pgrs, spds):
#     n = len(pgrs)
#     days = 1
#     last_days = [0]
#     ans = []
#
#     for i in range(n):
#         while True:
#             if pgrs[i] + days * spds[i] >= 100:
#                 if last_days[-1] == days:
#                     ans[-1] += 1
#                 else:
#                     last_days.append(days)
#                     ans.append(1)
#                 break
#
#             days += 1
#
#     return ans


from collections import deque

def solution(pgrs, spds):
    pgrs = deque(pgrs)
    spds = deque(spds)
    answer = []
    days, count = 0, 0

    while pgrs:
        if pgrs[0] + days * spds[0] >= 100:
            pgrs.popleft()
            spds.popleft()
            count += 1
        else:
            days += 1
            if count > 0:
                answer.append(count)
                count = 0

    answer.append(count)
    return answer

```