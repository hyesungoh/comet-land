---
title: 'BOJ-8394 - Python'
date: 2021-1-17 12:21:13
category: 'Algorithm'
draft: false
---
n명의 사람이 한 줄로 앉아있을 때, 자리를 벗어나지 않고 악수를 하는 방법의 수를 출력하는 문제. 안하는 경우를 포함해서 n-1, n-2명일 때의 경우를 더하면 n명일 때의 경우의 수를 구할 수 있다. 첫 번째 풀이는 입력받는 수 + 1까지 배열을 만들어 배열의 값을 참조하도록 풀었으며 마지막 자리의 수만 출력하면 되므로 10으로 나눈 나머지 값들을 저장하였다. 두 번째 풀이는 변수 i와 j를 이용하여 `i, j = j, (i + j) % 10`의 점화식을 사용하여 풀었다.
```python
# n = int(input())
# MAX = n + 1
# dp = [0 for _ in range(MAX)]
# dp[1], dp[2] = 1, 2
#
# for i in range(3, MAX):
#     dp[i] = (dp[i-1] + dp[i-2]) % 10
#
# print(dp[n])


i, j = 1, 1
for _ in range(int(input())):
    i, j = j, (i + j) % 10
print(i)

```