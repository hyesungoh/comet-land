---
title: 'BOJ-3003 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
정해진 수들과 비교하여 차이값을 출력하는 문제 input.split한 리스트와 range(6)을 기준으로 수행되는 for문을 이용하여 풀었다.
```python
cl = [1, 1, 2, 2, 2, 8]
nl = list(map(int, input().split()))
for i in range(6):
    print(cl[i] - nl[i], end=' ')

```