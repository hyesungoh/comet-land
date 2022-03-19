---
title: 'BOJ-11054 - Python'
date: 2021-3-29 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 수열 s를 입력받는다. 그 후 부분 수열 중 바이토닉 수열이면서 가장 긴 수열의 길이를 구하는 문제. 가장 긴 증가하는 부분 수열의 길이를 저장한 배열과 가장 긴 감소하는 부분 수열의 길이를 저장한 배열을 비교하여 풀었다.
```python
n = int(input())
l = list(map(int, input().split()))
upper = [1 for _ in range(n)]
downer = [1 for _ in range(n)]

for i in range(n):
    for j in range(i):
        if l[i] > l[j]:
            upper[i] = max(upper[i], upper[j]+1)

for i in range(n-1, -1, -1):
    for j in range(n-1, i, -1):
        if l[i] > l[j]:
            downer[i] = max(downer[i], downer[j] + 1)

answer = 0
for i in range(n):
    answer = max(answer, upper[i] + downer[i] - 1)

print(answer)

```