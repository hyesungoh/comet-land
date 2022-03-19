---
title: 'BOJ-14916 - Python'
date: 2021-1-12 12:21:13
category: 'Algorithm'
draft: false
---
n원을 5원, 2원으로 나누어줄 때 동전의 수를 최소로 돌려줬을 때, 동전의 수를 출력하는 문제. 그리디 방식을 이용하여 n을 5로 나눈 값부터 0까지 반복문을 수행하며 해당 값의 나머지가 2로 나누어질 때 동전의 수를 출력한 후 프로그램을 종료, 반복문 후에도 종료가 안됐을 시 -1을 출력하여 풀었다.
```python
n = int(input())
for i in range(n // 5, -1, -1):
    temp = n - (5 * i)
    if temp % 2 == 0:
        print(i + temp // 2)
        exit(0)
print(-1)

```