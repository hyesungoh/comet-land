---
title: 'BOJ-11650 - Python'
date: 2020-06-28 12:21:13
category: 'Algorithm'
draft: false
---
2차원 좌표를 받고 X 좌표가 증가하는 순으로 정렬, X 좌표가 같을 시 Y 좌표가 증가하는 순으로 정렬하여 출력하는 문제. 파이썬의 sort 메소드의 key를 lambda식을 사용해서 풀었다.
```python
l = list()
for _ in range(int(input())):
    l.append(list(map(int, input().split())))

l.sort(key= lambda x: (x[0], x[1]))
[print(i[0], i[1]) for i in l]

```