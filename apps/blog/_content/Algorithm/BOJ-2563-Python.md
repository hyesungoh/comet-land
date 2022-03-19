---
title: 'BOJ-2563 - Python'
date: 2021-2-23 12:21:13
category: 'Algorithm'
draft: false
---
100, 100 크기의 종이에 10, 10 크기의 색종이를 붙인다고 한다. 붙은 색종이의 수 n과 각 색종이들이 아랫변에서의 거리, 왼쪽변에서의 거리가 주어질 때 색종이가 붙은 영역의 크기를 출력하는 문제. 100, 100 크기의 배열을 만들어 붙어있는 지 확인하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
paper = [[0 for _ in range(100)] for _ in range(100)]
ans = 0

for _ in range(n):
    y, x = map(int, input().split())
    for i in range(y, y+10):
        for j in range(x, x+10):

            if not paper[i][j]:
                paper[i][j] = 1
                ans += 1

print(ans)

```