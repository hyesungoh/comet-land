---
title: 'BOJ-11729 - Python'
date: 2021-2-11 12:21:13
category: 'Algorithm'
draft: false
---
세 개의 장대가 있는 하노이 탑이며 n개의 첫 번째 장대에 있을 때 옮긴 횟수와 옮긴 위치를 출력하는 문제. 2의 n승 -1의 옮긴 횟수를 출력하며 재귀적으로 첫 번째 장대에 있는 원판의 수, 출발하는 장대, 안쓰는 장대, 도착하는 장대를 매개변수로 사용하여 풀었다.
```python
def move(n, x, y, z):
    if n == 1:
        print(x, z)
    else:
        move(n-1, x, z, y)
        print(x, z)
        move(n-1, y, x, z)

n = int(input())
print((2 ** n) - 1)
move(n, 1, 2, 3)

```