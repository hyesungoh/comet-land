---
title: 'BOJ-12852 - Python'
date: 2021-2-9 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 입력받은 후 해당 정수가 3으로 나누어 떨어지면 3으로 나누며, 2로 나누어 떨어지면 2로 나누기, 1을 빼기 3개의 연산이 가능할 때 이를 적절히 사용해 1로 만들 때 연산을 사용하는 횟수의 최솟값과 방법에 포함되어 있는 수를 출력하는 문제. 기본 1로 만들기에서 방법에 포함되어 있는 수를 추가한 문제. 첫 번째 풀이는 힙을 이용하여 그래프 탐색과 같은 방법으로 연산하며 1일 때 필요한 값을 반환하도록 풀었으나 시간초과 결과를 받게 되었다. 두 번째 풀이는 i가 1로 만들어질 때 필요한 값을 저장하는 배열을 이용하여 다이내믹 프로그래밍 방법을 이용하여 풀었다. 값이 갱신될 때 방법에 포함되어 있는 수를 저장하는 2차원 배열에 값을 추가하도록 풀었다.
```python
# import heapq
# import sys
# INF = sys.maxsize
#
# def solve():
#     q = []
#     # cnt, visit, now
#     heapq.heappush(q, [0, [n], n])
#     visit = [INF for _ in range(n+1)]
#
#     while q:
#         cnt, route, now = heapq.heappop(q)
#         if now == 1:
#             return cnt, route
#
#         visit[now] = cnt
#
#         heapq.heappush(q, [cnt+1, route+[now-1], now-1])
#
#         div3 = now // 3
#         if now % 3 == 0:
#             heapq.heappush(q, [cnt+1, route+[div3], div3])
#
#         div2 = now // 2
#
#         if now % 2 == 0:
#             heapq.heappush(q, [cnt+1, route+[div2], div2])
#
#
# n = int(input())
# cnt, route = solve()
# print(cnt)
# print(*route)



n = int(input())
dp = [0 for _ in range(n+1)]
paths = [[] for _ in range(n+1)]

dp[1] = 0
paths[1] = [1]

for i in range(2, n+1):
    dp[i] = dp[i-1] + 1
    paths[i] = paths[i-1] + [i]

    div3 = i // 3
    if i % 3 == 0 and dp[i] > dp[div3] + 1:
        dp[i] = dp[div3] + 1
        paths[i] = paths[div3] + [i]

    div2 = i // 2
    if i % 2 == 0 and dp[i] > dp[div2] + 1:
        dp[i] = dp[div2] + 1
        paths[i] = paths[div2] + [i]

print(dp[n])
print(*reversed(paths[n]))

```