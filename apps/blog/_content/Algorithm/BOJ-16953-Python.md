---
title: 'BOJ-16953 - Python'
date: 2020-11-5 12:21:13
category: 'Algorithm'
draft: false
---
a는 a \* 2, a의 왼쪽에 1붙이기의 연산이 가능할 때 b가 되는 연산의 최솟값을 출력하는 문제. bfs를 이용하여 풀었으며 q에 추가할 때 b와 크기를 비교하였으며 반복문이 종료시까지 return이 안됐을 때 -1을 return하여 풀었다.
```python
from collections import deque

def bfs():
    q = deque([[a, 1]])
    while q:
        node, sec = q.popleft()

        if node == b:
            return sec

        for next in [node*2, int(str(node)+"1")]:
            if next <= b:
                q.append([next, sec+1])
    return -1
a, b = map(int, input().split())
print(bfs())

```