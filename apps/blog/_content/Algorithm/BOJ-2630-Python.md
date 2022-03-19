---
title: 'BOJ-2630 - Python'
date: 2020-09-29 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 입력받은 후 n \* n 크기의 0과 1로 이루어진 배열을 입력받는다. 그래프에서 0은 흰색, 1은 파란색을 뜻한다. 그래프 안에서 색이 동일한 정사각형의 갯수를 출력하는 문제이며, 동일한 색이 아닐 때 가로와 세로 중간을 잘라 확인을 반복한다. 동일한 색으로 이루어져 있는지 확인하는 함수 isunity의 매개변수로 x와 y의 시작지점과 정사각형의 크기를 뜻하는 size를 입력받는다. 그 후 색을 확인하며 반복문 수행중에 색과 동일하지 않을 때 1, 2, 3, 4분면 각각 size//2를 이용하여 함수를 재귀하여 사용하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
graph = [input().split() for _ in range(n)]
count = [0, 0]

def isunity(x, y, size):
    global count
    color = graph[x][y]

    for i in range(x, x + size):
        for j in range(y, y + size):
            if graph[i][j] != color:
                isunity(x, y, size//2)
                isunity(x, y + size//2, size//2)
                isunity(x + size//2, y, size//2)
                isunity(x + size//2, y + size//2, size//2)
                return
    count[int(color)] += 1

isunity(0, 0, n)
[print(i) for i in count]

```