---
title: 'BOJ-1712 - Python'
date: 2020-07-27 12:21:13
category: 'Algorithm'
draft: false
---
노트북을 만들어서 판매할 때 기본 비용 x, 1대 생산시 소모되는 비용 y, 1대가 판매되는 가격이 z라고 했을 때 흑자가 되는 판매 개수를 출력하는 문제. z가 y보다 작을 때는 손익분기점을 넘지 못하므로 -1을 출력하고 그 외의 상황에서는 x//(z-y)+1, 1대 생산하여 보는 이득을 기본 비용에 나눈 값에 1을 더하는 수식을 이용하여 풀었다.
```python
x,y,z = map(int, input().split())

print (-1 if y>=z else x//(z-y)+1)

```