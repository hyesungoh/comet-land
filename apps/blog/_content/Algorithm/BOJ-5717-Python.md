---
title: 'BOJ-5717 - Python'
date: 2020-10-12 12:21:13
category: 'Algorithm'
draft: false
---
0 0이 입력될 때 까지 입력되는 두 수들의 합을 출력하는 문제. while과 break를 이용하여 풀었다.
```python
while 1:
    x, y = map(int, input().split())
    if x == 0 and y == 0:
        break
    print(x+y)

```