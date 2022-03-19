---
title: '프로그래머스-여행경로 - Python'
date: 2021-3-8 12:21:13
category: 'Algorithm'
draft: false
---
주어진 항공권을 모두 이용하여 여행경로를 짤려고한다. 항공권 정보가 담긴 2차원 배열이 주어질 때, 방문하는 공항 경로를 배열에 담아 반환하는 문제. 첫 번째 풀이는 알파벳 순서대로 방문해야되는 조건을 이용해 heap 연산을 사용하여 풀었다. 결과는 테스트 케이스 4개중 두개를 맞췄으며, 반례는 출발지와 도착지가 같은 항공권이 여러개 있을 때 였다. 두 번째 풀이는 스택을 stack을 이용한 dfs로 풀었다. 스택의 가장 위 값을 기준으로 그래프에 존재하며, 남은 항공권이 있을 시, 스택에 추가. 아닐 시 방문정보를 저장하는 배열에 스택의 가장 위 값을 pop한 후, 뒤집어서 반환하여 풀었다.
```python
# import heapq
#
# def solution(tickets):
#     graph = {i[0]: [] for i in tickets}
#
#     for ticket in tickets:
#         fr = ticket[0]
#         to = ticket[1]
#         heapq.heappush(graph[fr], to)
#
#     q = ['ICN']
#     answer = []
#     while q:
#         now = q.pop()
#         answer.append(now)
#         if now in graph and graph[now]:
#             next = heapq.heappop(graph[now])
#             q.append(next)
#
#     return answer

def solution(tickets):
    graph = {i[0]: [] for i in tickets}

    for ticket in tickets: graph[ticket[0]].append(ticket[1])
    for k in graph: graph[k].sort(reverse=True)

    stack = ['ICN']
    answer = []
    while stack:
        top = stack[-1]
        if top in graph and graph[top]: stack.append(graph[top].pop())
        else: answer.append(stack.pop())

    return answer[::-1]

```