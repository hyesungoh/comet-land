---
title: '프로그래머스-2x타일링 - Python'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
가로 길이가 2이고 세로의 길이가 1인 직사각형 모양의 타일이 있다. 이 때 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채울 때 해당 경우의 수를 출력하는 문제. 첫 번째 풀이는 배열에 n일 떄의 값을 메모이제이션하여 활용하여 마지막 두 값을 더해주며 풀었다. 두 번쨰 풀이는 마지막 두 값만을 이용하는 것을 이용하여 변수 두 개를 이용하여 풀었다.
```python
# def solution(n):
#     dp = [0, 1, 2]
#     for i in range(n-2):
#         dp.append(sum(dp[-2:]) % 1000000007)
#
#     return dp[n]

def solution(n):
    a, b = 1, 1
    for _ in range(1, n):
        a, b = b, (a + b) % 1000000007
    return b

```