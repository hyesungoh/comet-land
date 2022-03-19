---
title: 'BOJ-12865 - Python'
date: 2020-10-26 12:21:13
category: 'Algorithm'
draft: false
---
정해진 무게 한도에 맞춰서 최대의 가치를 출력하는 배낭, 다이내믹 프로그래밍 문제. [물건의 수][무게의 크기] 만큼 배열을 만든 후 물건 > 무게순으로 반복을 수행한다. 그 후 현재 반복중인 무게에 따라 넣을 수 없으면 같은 무게, 저번 반복 배열 값을 할당. '들 수 있으면 같은 무게, 저번 반복' 값과 '현재 물건의 가치 + 저번 물건의 현재 반복 무게 - 현재 물건의 무게 배열' 값 중 큰 것을 할당하여 풀었다.
```python
import sys
input = sys.stdin.readline

n, k = map(int, input().split())
w_v = [[0, 0]]
ans = [[0 for _ in range(k+1)] for _ in range(n+1)]

for _ in range(n):
    w_v.append(list(map(int, input().split())))

for i in range(1, n+1):
    for j in range(1, k+1):
        w = w_v[i][0] # 무게
        v = w_v[i][1] # 가치
        if j < w: # 들 수 없으면 ?
            ans[i][j] = ans[i-1][j] # 같은 무게, 저번 반복된 물건의 값
        else: # 들 수 있다면?
            # 같은 무게, 저번 반복된 물건의 값과
            # 현재 물건의 가치 + 저번 반복된 물건의 현재 반복된 무게 - 현재 물건의 무게의 값을 더한 값을
            # 비교해서 더욱 큰 것을 배열에 할당
            ans[i][j] = max(ans[i-1][j], v + ans[i-1][j-w])
print(ans[n][k])

```