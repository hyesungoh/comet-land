---
title: '프로그래머스-위장 - Python'
date: 2021-3-9 12:21:13
category: 'Algorithm'
draft: false
---
옷의 정보를 담은 2차원 배열이 주어진다. 해당 배열은 옷의 이름, 종류로 이루어져 있다. 최소 한 개의 의상을 선택하는 서로 다른 옷의 조합의 수를 반환하는 문제. 같은 이름을 갖는 의상이 존재하지 않기 때문에 옷의 종류별로 딕셔너리를 이용하여 수를 세어 주었다. 그 후 옷 종류마다 +1 한 값을 계속 곱해주어 조합의 수를 찾은 후, 하나도 안입은 경우를 하나 뺀 값을 반환하여 풀었다.
```python
def solution(clothes):
    graph = {}
    for cloth in clothes:
        if cloth[1] in graph: graph[cloth[1]] += 1
        else: graph[cloth[1]] = 1


    ans = 1
    for key in graph:
        ans = ans * (graph[key] + 1)
    return ans - 1

```