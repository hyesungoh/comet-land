---
title: 'BOJ-1633 - Python'
date: 2021-1-16 12:21:13
category: 'Algorithm'
draft: false
---
30 ~ 1000개의 두 정수를 입력받는다. 중복되지 않으며 한 줄에 한 개의 수만 선택가능할 때, 앞 수 15개, 뒷 수 15개를 합친 최대 값을 출력하는 문제. 첫 풀이는 함수를 재귀적으로 활용하여 dp[정수의 길이][16][16]의 크기를 갖는 배열에 값을 할당, 비교하여 풀었으나 문제의 풀이가 길어져 두 번째 풀이는 3중 반복문을 이용하여 할당, 비교하여 풀었다. 다이내믹 프로그래밍 문제를 더 공부해야겠다.
```python
# def dfs(white, black, current_index, length):
#
#     if white == 0 and black == 0:
#         return 0
#     if current_index == length:
#         return 0
#     if dp[current_index][white][black] != 0:
#         return dp[current_index][white][black]
#
#     dp[current_index][white][black] = dfs(white, black, current_index+1, length)
#     if white > 0:
#         dp[current_index][white][black] = max(dp[current_index][white][black], dfs(white-1, black, current_index+1, length) + wl[current_index])
#     if black > 0:
#         dp[current_index][white][black] = max(dp[current_index][white][black], dfs(white, black-1, current_index+1, length) + bl[current_index])
#     return dp[current_index][white][black]
#
# wl, bl = [], []
# length = 0
# total = 0
#
# while True:
#     try:
#         w, b = map(int, input().split())
#         length += 1
#     except:
#         break
#     wl.append(w)
#     bl.append(b)
#
# dp = [[[0] * 16 for _ in range(16)] for _ in range(length+1)]
# print(dfs(15, 15, 0, length))


wl, bl = [0], [0]
length = 0
while True:
    try:
        white, black = map(int, input().split())
        length += 1
    except:
        break
    wl.append(white)
    bl.append(black)

dp = [[[0] * 16 for _ in range(16)] for _ in range(length+1)]
for idx in range(1, length+1):
    for w in range(16):
        for b in range(16):
            dp[idx][w][b] = dp[idx-1][w][b]
            if w > 0:
                dp[idx][w][b] = max(dp[idx][w][b], dp[idx-1][w-1][b] + wl[idx])
            if b > 0:
                dp[idx][w][b] = max(dp[idx][w][b], dp[idx-1][w][b-1] + bl[idx])

print(dp[-1][-1][-1])

```