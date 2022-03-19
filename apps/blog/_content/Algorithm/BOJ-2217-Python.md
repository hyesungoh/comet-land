---
title: 'BOJ-2217 - Python'
date: 2020-12-14 12:21:13
category: 'Algorithm'
draft: false
---
n개의 밧줄이 견딜 수 있는 무게가 주어진다. 밧줄은 여러줄 사용하여 무게 w를 밧줄의 수 k만큼 w/k의 중량으로 나누어 들 수 있을 때, 밧줄을 이용하여 들 수 있는 최대 무게를 구하는 문제. 입력되는 모든 밧줄을 오름차순으로 정렬 후 `해당 밧줄의 무게 * (n-i)`를 계산하여 최대값을 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
l = sorted([int(input()) for _ in range(n)])

for i in range(n):
    l[i] = l[i] * (n-i)
print(max(l))

```