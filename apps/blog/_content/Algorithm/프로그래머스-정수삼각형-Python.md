---
title: '프로그래머스-정수삼각형 - Python'
date: 2021-3-6 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 삼각형의 정보가 담긴 배열이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 반환하는 문제. 백준에서 비슷한 유형을 풀어보아 쉽게 풀었다. 첫 번째 접근은 백준에서 푼 것과 유사하게 삼각형을 직사각형 모양의 빈 곳은 0으로 이루어진 배열이 되도록 만들려고 했으나, 생각을 해보니 굳이 만들 필요가 없을 것 같아 주어진 배열을 이용하여 풀었다. y에 대해서 1부터 높이까지 반복을, x에 대해서 y+1까지 반복을 하였다. 높이에 따라 삼각형에 있는 정수의 수가 다르기 때문이다. x가 0이거나 y의 값과 같을 때 고려할 수가 하나이기 때문에 에외처리 하였으며, 다른 경우는 `t[y][x] = max(t[y-1][x-1], t[y-1][x]) + t[y][x]`의 점화식을 이용하였다. 배열의 마지막 값 중 제일 큰 것을 반환하여 풀었다
```python
def solution(triangle):
    height = len(triangle)

    for y in range(1, height):
        for x in range(y+1):
            if x == 0:
                triangle[y][x] = triangle[y-1][x] + triangle[y][x]
            elif x == y:
                triangle[y][x] = triangle[y-1][x-1] + triangle[y][x]
            else:
                triangle[y][x] = max(triangle[y-1][x-1], triangle[y-1][x]) + triangle[y][x]

    return max(triangle[-1])

```