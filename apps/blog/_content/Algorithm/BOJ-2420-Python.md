---
title: 'BOJ-2420 - Python'
date: 2020-07-15 12:21:13
category: 'Algorithm'
draft: false
---
-2,000,000,000 ≤ N, M ≤ 2,000,000,000의 범위를 가진 두 수를 입력받고 두 수의 차이값을 출력하는 문제. n-m값에 abs함수를 이용하여 풀었다.
```python
n, m = map(int, input().split())
print(abs(n - m))

```