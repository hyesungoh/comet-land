---
title: 'BOJ-2455 - Python'
date: 2020-08-13 12:21:13
category: 'Algorithm'
draft: false
---
4개의 줄을 입력받으며 각 줄마다 열차에 '하차한 승객 수' '승차한 승객 수'를 입력받는 다. 승객이 가장 많이 탑승하고 있을 때가 몇명인지 출력하는 문제. 반복문을 4번 수행하며 t 변수에 t + 승차한 승객 수 - 하차한 승객 수를 계산하였고 max 함수를 이용하여 t와 저번 반복문에 수행된 ans와 비교를 하여 풀었다.
```python
t, ans = 0, 0
for _ in range(4):
    i, j = map(int, input().split())
    t = t + j - i
    ans = max(ans, t)

print(ans)

```