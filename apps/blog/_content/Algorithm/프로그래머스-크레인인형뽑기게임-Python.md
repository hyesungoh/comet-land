---
title: '프로그래머스-크레인인형뽑기게임 - Python'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
n x n 크기의 이차원 배열을 입력받는다. 해당 배열에는 다양한 인형들의 번호와 빈칸인 0으로 이루어져있다. 인형을 뽑는 인덱스로 이루어진 moves가 주어지며, 해당 순서대로 인형을 뽑아 바구니에 넣는다. 바구니에 넣은 인형의 종류가 같은 게 붙어있을 시 두 인형은 터져 없어진다. 터져 없어진 인형의 수를 출력하는 문제. 반복문을 이용하여 각 열의 인형들을 넣기 전에 마지막 요소와 비교하여 연산하였다. 터진 횟수 \* 2를 반환하여 풀었다.
```python
def pang(basket, answer, item):
    if basket[-1] == item:
        basket.pop()
        answer[0] += 1
    else:
        basket.append(item)

def solution(board, moves):
    depth = len(board)
    basket = [0]
    answer = [0]

    for move in moves:
        move -= 1
        for i in range(depth):
            if board[i][move] != 0:
                pang(basket, answer, board[i][move])
                board[i][move] = 0
                break

    return answer[0] * 2

```