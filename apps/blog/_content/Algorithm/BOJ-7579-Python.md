---
title: 'BOJ-7579 - Python'
date: 2021-1-18 12:21:13
category: 'Algorithm'
draft: false
---
n개의 물건, 배낭의 크기 m를 입력받은 후 n개의 무게와 값이 주어지는 기존 냅색 문제와 동일하지만, 기족 m 이하의 최대값을 출력하는 것이 아닌, m 이상이 되는 최소한의 값을 출력하는 문제. m은 최대 10,000,000의 크기를 갖기 때문에 모두 탐색을 하는 것은 불가능하여 입력되는 모든 무게들을 합한 값까지 반복을 수행하였으며 기존 냅색 문제와 동일하게 담을 수 있을 때 최대한의 값을 담았으며, 담은 값이 m보다 클 시 j를 비교, 저장하여 풀었다.
```python
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
memories = list(map(int, input().split()))
costs = list(map(int, input().split()))
all_cost = sum(costs) + 1
ans = [[0 for _ in range(all_cost)] for _ in range(n)]
result = all_cost

for i in range(n):
    memory = memories[i]
    cost = costs[i]
    for j in range(all_cost):
        if j < cost:
            ans[i][j] = ans[i-1][j]
        else:
            ans[i][j] = max(ans[i-1][j], memory + ans[i-1][j-cost])

        if ans[i][j] >= m:
            result = min(result, j)

print(result)

```