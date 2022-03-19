---
title: 'BOJ-1904 - Python'
date: 2020-12-9 12:21:13
category: 'Algorithm'
draft: false
---
00과 1의 모양을 한 타일이 있다. 이 때 자릿수 n이 주어질 때 나타낼 수 있는 모습의 가짓수를 15746으로 나눈 나머지를 출력하는 문제. dp[i] = dp[i-1] + dp[i-2]의 점화식을 도출하여 풀었다. 결과값에 나머지 연산을 한 값을 출력하는 방식으로 풀 시 메모리초과 결과를 받기 때문에 매 연산마다 나머지 연산을 하여 풀었다.
```python
l = [1, 2]
n = int(input())
for i in range(2, n):
    l.append((l[i-2] + l[i-1])%15746)
print(l[n-1])

```