---
title: 'BOJ-11659 - Python'
date: 2020-10-27 12:21:13
category: 'Algorithm'
draft: false
---
n과 m을 입력받은 후 n만큼의 크기의 일차원 배열을 입력받는다. 그 후 m번만큼 인덱스 i, j까지의 합을 출력하는 문제. 완전 탐색을 사용하여 풀 경우 시간초과 결과를 받게되어 누적합을 이용하여 풀었다. l_add 리스트에 n만큼 반복을 하는 i를 이용하여 l_add의 마지막 값과 입력받은 일차원 배열의 i번째 값을 더하여 누적합 리스트를 구현했다. i가 1일 때 누적합 리스트의 j번째 요소를 출력, 아닐 때 누적합 리스트의 j번째 값에 i-1째 값을 빼 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
l = list(map(int, input().split()))
l_add = [0]

for i in range(n): l_add.append(l_add[-1] + l[i])
for _ in range(m):
    i, j = map(int, input().split())
    print(l_add[j] if i == 1 else l_add[j] - l_add[i-1])

```