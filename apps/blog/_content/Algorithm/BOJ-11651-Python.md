---
title: 'BOJ-11651 - Python'
date: 2020-06-28 12:21:13
category: 'Algorithm'
draft: false
---
위 문제의 우선순위가 XY에서 YX로 바뀐 문제 lambda식을 바꿔서 풀었다.
```python
l = list()
for _ in range(int(input())):
    l.append(list(map(int, input().split())))

l.sort(key= lambda x: (x[1], x[0]))
[print(i[0], i[1]) for i in l]

```