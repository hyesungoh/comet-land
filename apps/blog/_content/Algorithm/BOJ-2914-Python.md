---
title: 'BOJ-2914 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
n과 m을 입력받은 후 A를 구하면 된다. A / n이 m이지만 A / n에서 소수값이 있을 때 m은 +1한 정수가 되게 된다. n \* (m-1) + 1 수식을 이용하여 풀었다.
```python
n, m = map(int, input().split())
print(n * (m-1) + 1)

```