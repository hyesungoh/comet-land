---
title: 'BOJ-1018 - Python'
date: 2021-1-2 12:21:13
category: 'Algorithm'
draft: false
---
y만큼 x 크기의 "W", "B"로 이루어진 문자열들을 입력받는다. 그 후 해당 문자열들을 8, 8 크기로 체스판처럼 만들 때 수정해야할 칸의 최솟값을 출력하는 문제. 0부터 y-7, x-7까지 반복문을 수행하며 시작점과 끝점을 함수의 매개변수로 사용하였다. 함수는 시작점부터 끝점까지 반복문을 수행하며 `(i + j) % 2`의 수식을 이용하여 임의의 "W", "B"를 판단하였으며 두가지 경우에 대하여 문자열이 다를 시 정수형 변수를 증가하여 해당 값을 계산하여 풀었다.
```python
import sys
input = sys.stdin.readline

y, x = map(int, input().split())
board =["" for _ in range(y)]
ans = y * x

for i in range(y):
    board[i] = input()

def check_diff(sy, ey, sx, ex):
    global ans
    diff_white = [0 for _ in range(y)]
    diff_black = [0 for _ in range(y)]

    for i in range(sy, ey):
        cnt_white = 0
        cnt_black = 0
        for j in range(sx, ex):
            if (i + j) % 2 == 0:
                if board[i][j] == "W":
                    cnt_black += 1
                else:
                    cnt_white += 1
            else:
                if board[i][j] == "B":
                    cnt_black += 1
                else:
                    cnt_white += 1

        diff_black[i] = cnt_black
        diff_white[i] = cnt_white

    ans = min(ans, sum(diff_black), sum(diff_white))

for i in range(0, y-7):
    for j in range(0, x-7):
        check_diff(i, i+8, j, j+8)

print(ans)

```