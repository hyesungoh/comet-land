---
title: 'BOJ-7568 - Python'
date: 2020-11-23 12:21:13
category: 'Algorithm'
draft: false
---
n명의 몸무게, 키를 입력받은 후 덩치의 등수를 출력하는 문제. A는 몸무게가 B보다 크고, B는 키가 A보다 크거나 반대의 경우에는 등수가 똑같은 조건이 있다. 모든 사람에 대하여 비교를하여 몸무게와 키 둘 다 큰 경우에 1부터 1씩 더 하여 저장한 값을 출력하여 풀었다.
```python
n = int(input())
l = []
rank = [0 for _ in range(n)]

for _ in range(n):
    l.append(list(map(int, input().split())))

for i in range(n):
    now_w, now_h = l[i][0], l[i][1]
    r = 1
    for j in range(n):
        com_w, com_h = l[j][0], l[j][1]
        if now_w < com_w and now_h < com_h:
            r += 1
    rank[i] = r

[print(i, end=" ") for i in rank]

```