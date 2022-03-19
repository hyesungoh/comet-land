---
title: 'BOJ-1913 - Python'
date: 2020-10-13 12:21:13
category: 'Algorithm'
draft: false
---
홀수 n의 크기를 갖는 달팽이 모양의 2차원 배열을 출력하고 n\*n 이하의 입력받는 정수의 위치를 출력하는 문제. 반복문 도중 배열의 마지막 값일 때 exit을 이용하여 코드를 중단하도록 풀었다. 방향은 2차원 배열을 이용하여 관리해 주었으며, 같은 방향으로 진행되는 값이 추가되는 조건을 확인하여 방향을 관리하는 반복문 안에 넣어 같은 방향으로 반복되게 풀었다.
```python
n = int(input())
dist = int(input())
l = [[0 for _ in range(n)] for _ in range(n)]

count = 1
y, x = n // 2, n // 2  # 시작 지점
dire = [[-1, 0], [0, 1], [1, 0], [0, -1]]  # 방향

temp_count = 1  # 해당 방향으로 몇 번 찍어야되는지

while True:
    for i in range(4):  # 4가지 방향으로
        for j in range(temp_count):
            if count == dist:  # 목표일 때 좌표 저장
                ans = [y + 1, x + 1]

            l[y][x] = count
            y += dire[i][0]  # 현재 방향만큼 수정
            x += dire[i][1]

            if count == n * n:  # 배열의 마지막 값일 때
                [print(*t) for t in l]
                print(*ans)
                exit(1)  # 종료

            count += 1

        if i % 2 == 1:  # 같은 방향으로 진행되는 값 추가
            temp_count += 1

```