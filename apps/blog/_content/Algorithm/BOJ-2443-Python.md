---
title: 'BOJ-2443 - Python'
date: 2020-10-6 12:21:13
category: 'Algorithm'
draft: false
---
역삼각형을 만드는 별찍기 문제. n부터 0까지 반복문을 사용했으며 공백을 n - i개 출력, 별을 i \* (i - 1)개 출력한 후 줄바꿈하여 풀었다.
```python
n = int(input())
for i in range(n, 0, -1):
    print(' ' * (n - i), end='')
    print('*' * (i + (i - 1)))

```