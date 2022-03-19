---
title: 'BOJ-2460 - Python'
date: 2020-08-13 12:21:13
category: 'Algorithm'
draft: false
---
위 문제와 동일하며 다른 점은 10번 반복을 한다는 점. 반복문을 10번 수행하게 바꾸어서 풀었다.
```python
t, ans = 0, 0
for _ in range(10):
    i, j = map(int, input().split())
    t = t + j - i
    ans = max(ans, t)

print(ans)

```