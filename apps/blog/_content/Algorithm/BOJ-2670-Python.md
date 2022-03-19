---
title: 'BOJ-2670 - Python'
date: 2021-1-18 12:21:13
category: 'Algorithm'
draft: false
---
n개의 실수를 입력받아 한 개 이상의 연속된 수들의 곱이 최대가 되는 부분의 곱을 출력하는 문제. 첫 번째 풀이는 브루트포스 방식으로 2중 반복문을 이용하여 모든 값을 곱하여 비교하였지만 시간초과 결과를 받게 되었다. 두 번째 풀이는 리스트의 인덱스에 인덱스 -1 값과 비교하여 더욱 큰 값을 저장하는 다이내믹 프로그래밍 방식을 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
l = []
ans = -1

for _ in range(n):
    l.append(float(input()))

for i in range(1, n):
    l[i] = max(l[i], l[i] * l[i-1])
    ans = max(ans, l[i])

print("%.3f" %ans)

```