---
title: 'BOJ-11047 - Python'
date: 2020-11-3 12:21:13
category: 'Algorithm'
draft: false
---
n가지 종류의 동전으로 금액 k를 맞출 때 동전의 최소 개수를 출력하는 그리디 알고리즘 문제. n가지 동전은 오름차순으로 입력되기 때문에 reversed를 이용하여 높은 금액부터 나머지와 몫을 계산하는 연산자를 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
l = [int(input()) for _ in range(n)]
ans = 0
for i in reversed(l):
    if k >= i:
        ans += k//i
        k %= i
    if k == 0:
        break
print(ans)

```