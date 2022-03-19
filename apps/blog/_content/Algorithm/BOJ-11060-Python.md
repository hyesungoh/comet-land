---
title: 'BOJ-11060 - Python'
date: 2021-1-7 12:21:13
category: 'Algorithm'
draft: false
---
n개의 정수로 이루어진 수열을 입력받는다. i번째 인덱스의 값을 A라고 했을 때 i ~ i+A까지 이동할 수 있다고 한다. 인덱스 0부터 시작해서 n까지 가는 최소 이동횟수를 출력하며 인덱스 n까지 갈 수 없을 때는 -1을 출력하는 문제. n+1의 수로 만들어진 새로운 배열을 생성하며 0부터 i까지 반복을 수행한다. 그 안에 i부터 i + l[i]까지 반복을 하며 dp[j]에 저장된 값과 현재 dp[i] + 1 값과 비교하여 작은 수를 저장한다. 반복문이 종료될 시 마지막에 저장된 값이 n + 1 (절대 나올 수 없는 수이기 때문에)일 시 -1을, 아닐 시 마지막에 저장된 값을 출력하여 풀었다.
```python
n = int(input())
l = list(map(int, input().split()))
dp = [n+1 for _ in range(n)]
dp[0] = 0

for i in range(n):
    for j in range(i, i + l[i] + 1):
        if j < n:
            dp[j] = min(dp[j], dp[i] + 1)

print("-1" if dp[-1] == n+1 else dp[-1])

```