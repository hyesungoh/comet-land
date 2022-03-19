---
title: 'BOJ-1914 - Python'
date: 2021-2-10 12:21:13
category: 'Algorithm'
draft: false
---
세 개의 판에 n개의 원판이 있는 하노이 탑 문제. 옮긴 횟수를 출력한 후, n이 20 이하일 때만 이동하는 경로를 출력하는 문제. 2의 n승 - 1이 하노이 탑의 옮긴 횟수임에 먼저 출력한다. 그 후 1번 판에 있는 원판의 수, 출발할 곳, 안쓰는 곳, 도착할 곳을 매개 변수로 재귀적으로 호출하여 풀었다. 하노이탑 문제는 아직 이해도가 부족한 것 같다.
```python
def move(num, fr, temp, to):
    if num == 1:
        print(fr, to)
    else:
        move(num-1, fr, to, temp)
        print(fr, to)
        move(num-1, temp, fr, to)

N = int(input())
print((2 ** N) - 1)
if N <= 20: move(N, 1, 2, 3)

```