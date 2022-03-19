---
title: 'BOJ-13308 - Python'
date: 2021-3-10 12:21:13
category: 'Algorithm'
draft: false
---
N개의 도시가 있고 양방향의 M개의 도로가 있다. 그리고 모든 도시들은 1리터의 기름당 가격을 갖는 주유소를 보유하고 있다. 도로의 길이 1만큼 1리터의 기름을 쓸 때, 최소 비용으로 1번 도시부터 N번 도시까지 이동할 때의 비용을 출력하는 문제. 첫 번째 풀이는 힙을 이용한 다익스트라 방식으로 다음 주유소가 현재 주유소보다 비쌀 때 다음 주유소의 가격을 현재 주유소 값으로 변환(미리 주유)하며. 방문했던 곳의 비용을 계산하여 방문을 하도록 연산을 하였더니, 싼 주유소를 방문해 왕창 주유하고 다시 돌아가는 경우가 반례였다. 두 번째 풀이는 최소 비용을 저장하는 배열을 2차원으로, [주유소 가격][도시들]로 구성하였다. 또한 힙에 지금까지 방문했던 주유소 가격중 제일 싼 곳을 저장하여 해당 주유소 가격의 배열과 비교하여 풀었다.
```python
# def dijkstra():
#     price4dist = [INF for _ in range(N+1)]
#     # price4dist[1] = 0
#
#     q = []
#     heapq.heappush(q, [0, 1])
#
#     while q:
#         cnt, now = heapq.heappop(q)
#         if cnt > price4dist[now]:
#             continue
#
#         for next, next_dist in graph[now]:
#             next_price = (next_dist * price[now]) + cnt
#
#             if price4dist[next] >= next_price:
#                 if price[next] > price[now]:
#                     price[next] = price[now]
#
#                 price4dist[next] = next_price
#                 heapq.heappush(q, [next_price, next])
#
#     return price4dist

import sys
import heapq
INF = sys.maxsize

def dijkstra():
    # 현재 위치, 현재까지 가장 싼 기름값
    result = [[INF for _ in range(2501)] for _ in range(N+1)]

    q = []
    # 총 비용, 현재까지 가장 싼 주유소, 현재 위치
    heapq.heappush(q, [0, price[1], 1])

    while q:
        node = heapq.heappop(q)
        here_cost = node[0]
        here_min_oil = node[1]
        here = node[2]

        # 저장된 값이 현재 값보다 클 시
        if here_cost > result[here][here_min_oil]:
            continue

        # 목적지에 도착 시
        if here == N:
            return here_cost

        for there, dist in graph[here]:
            # 현재까지 가장 싼 주유소에서 기름을 넣은 것으로 계산
            there_cost = here_cost + (dist * here_min_oil)
            # 가장 싼 주유소 갱신
            there_min_oil = min(here_min_oil, price[there])

            # 현재 저장된 값보다 갱신될 값이 작을 시
            if result[there][there_min_oil] > there_cost:
                result[there][there_min_oil] = there_cost
                heapq.heappush(q, [there_cost, there_min_oil, there])
    return -1


N, M = map(int, input().split())
price = [0] + list(map(int, input().split()))
graph = {i: [] for i in range(N+1)}

for _ in range(M):
    s, e, w = map(int, input().split())
    graph[s].append([e, w])
    graph[e].append([s, w])

print(dijkstra())

```