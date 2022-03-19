---
title: 'BOJ-13699 - Python'
date: 2021-2-19 12:21:13
category: 'Algorithm'
draft: false
---
다음의 점화식에 의해 정의된 수열이 있다. `t(0)=1, t(n)=t(0)*t(n-1)+t(1)*t(n-2)+...+t(n-1)*t(0)` 정수 n을 입력받은 후 t(n)을 출력하는 문제. 최대 크기인 35까지 i로 반복문을, i까지 j로 반복문을 수행하며 `dp[i] += dp[j] * dp[i-j-1]`의 점화식을 이용하여 풀었다.
```python
dp = [0 for _ in range(36)]
dp[0], dp[1], dp[2] = 1, 1, 2

for i in range(3, 36):
    for j in range(i):
        dp[i] += dp[j] * dp[i-j-1]

print(dp[int(input())])

```