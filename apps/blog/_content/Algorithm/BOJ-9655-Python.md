---
title: 'BOJ-9655 - Python'
date: 2021-1-12 12:21:13
category: 'Algorithm'
draft: false
---
n개의 돌이 있을 때 1개 혹은 3개를 가져가, 맨 마지막에 돌을 가져가는 사람이 이기는 게임이 있다. 상근이와 찬영이가 상근이부터 시작하여 게임을 진행할 시 n개의 돌일 때 누가 승리하는 지 출력하는 문제. 각 숫자들이 주어졌을 때 승자를 써보니 짝수와 홀수일 때 승자가 정해져있어 간단하게 풀었다.
```python
n = int(input())
print("CY" if n % 2 == 0 else "SK")

# print("CY" if int(input()) % 2 == 0 else "SK")

```