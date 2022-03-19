---
title: 'BOJ-1946 - Python'
date: 2021-3-6 12:21:13
category: 'Algorithm'
draft: false
---
지원자의 서류, 면접 성적을 입력받는다. 다른 모든 지원자와 비교했을 때 두 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발한다. 이 때 뽑을 수 있는 신입사원의 최대 인원수를 출력하는 문제. 첫 번째 풀이는 첫 번째 성적을 통해 정렬 후, 두 번째 성적과 비교하여 순위가 높은 지원자일 때 재설정, 낮은 지원자일 때 정수형 변수의 크기를 늘려 탈락자의 수를 세어 풀었다. 두 번째 풀이는 첫 번째 성적의 순위를 인자로 배열에 넣어 정렬하는 과정을 없애도록 풀었다.
```python
# import sys
# input = sys.stdin.readline
#
# for _ in range(int(input())):
#     n = int(input())
#     l = []
#     for _ in range(n): l.append(list(map(int, input().split())))
#     l.sort()
#
#     cnt = 0
#     m = l[0][1]
#     for i in range(1, n):
#         if m > l[i][1]:
#             m = l[i][1]
#         else:
#             cnt += 1
#
#     print(n-cnt)


import sys
input = sys.stdin.readline

for _ in range(int(input())):
    n = int(input())
    l = [0 for _ in range(n)]
    for _ in range(n):
        a, b = map(int, input().split())
        l[a-1] = b

    cnt = 0
    m = l[0]
    for i in range(1, n):
        if m > l[i]: m = l[i]
        else: cnt += 1

    print(n-cnt)

```