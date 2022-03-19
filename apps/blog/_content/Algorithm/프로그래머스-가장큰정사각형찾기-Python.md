---
title: '프로그래머스-가장큰정사각형찾기 - Python'
date: 2021-2-24 12:21:13
category: 'Algorithm'
draft: false
---
0과 1로 이루어진 이차원 배열 board가 주어진 후, 해당 배열에서 가장 큰 정사각형의 넓이를 출력하는 문제. 좌표 1, 1부터 해당 값이 0이 아니며, 위, 왼쪽, 왼쪽 위 대각선의 값을 중 제일 작은 값 +1한 것을 저장한다. 그 중 제일 큰 값끼리 곱한 값을 반환하여 풀었다.
```python
def solution(board):
    ylen = len(board)
    xlen = len(board[0])
    ans = 1 if board[0][0] else 0

    for y in range(1, ylen):
        for x in range(1, xlen):
            if not board[y][x]:
                continue

            up = board[y-1][x]
            down = board[y][x-1]
            diag = board[y-1][x-1]
            if up > 0 and down > 0 and diag > 0:
                board[y][x] = min(up, down, diag) + 1
                ans = max(ans, board[y][x])

    return ans * ans

```