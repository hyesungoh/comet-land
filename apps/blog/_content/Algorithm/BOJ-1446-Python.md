---
title: 'BOJ-1446 - Python'
date: 2020-10-29 12:21:13
category: 'Algorithm'
draft: false
---
다익스트라 문제인 줄 알았던 다이내믹 프로그래밍 문제. 지름길의 수 n과 도착지의 거리 d가 주어진다. 그 후 u, v, w 각각 시작점, 도착점, 소모시간이 주어진다. 뒤로 돌아갈 순 없을 때 도착지까지 걸리는 최소 소모시간을 출력하는 문제. 지름길을 {시작점: [[도착지, 소모시간], [도착지1, 소모시간1]]} 형태로 저장하였다. d의 최대 크기인 10000까지의 배열을 생성 후 입력된 정수현 변수 count가 d와 같을 때까지 반복을 수행한다. 그 후 현재 count가 시작점인 지름길이 있을 때 도착지의 값을 현재 값과 소모시간 값을 더한 것과 현재 저장된 값 중 작은 것을 할당한다. 그 후 배열의 다음 값을 저장된 값고 현재 값 + 1중 작은 것을 할당하여 풀었다.
```python
# import sys
# input = sys.stdin.readline
#
# def dijkstra(graph, d):
#     total = [i for i in range(d+1)]
#     count = 0
#     value = 0
#     while count <= d:
#         if count in graph:
#             for short in graph[count]:
#                 total[short[0]] = min(total[short[0]], short[1] + total[count])
#         else:
#             value = min(total[count], value)
#             total[count] = value
#
#         value += 1
#         count += 1
#     return total
#
# n, d = map(int, input().split())
# graph = {}
# for _ in range(n):
#     u, v, w = map(int, input().split())
#     if d >= v and v-u > w: # 지름길을 이용할 필요가 없을 때
#         if u in graph:
#             graph[u].append([v, w])
#         else:
#             graph[u] = [[v, w]]
#
# total = dijkstra(graph, d)
# print(total[d])

import sys
input = sys.stdin.readline

def dp(graph, d):
    l = [i for i in range(10000)]
    count = 0
    value = 0
    while count <= d:
        if value in graph:
            for short_cut in graph[value]:
                l[short_cut[0]] = min(l[short_cut[0]], short_cut[1] + l[value])

        l[value+1] = min(l[value+1], l[value]+1)
        value += 1
        count += 1
    return l

n, d = map(int, input().split())
graph = {}
for _ in range(n):
    u, v, w = map(int, input().split())
    if d >= v and v - u > w:
        if u in graph:
            graph[u].append([v, w])
        else:
            graph[u] = [[v, w]]

l = dp(graph, d)
print(l[d])

```