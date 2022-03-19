---
title: 'BOJ-5596 - Python'
date: 2020-08-21 12:21:13
category: 'Algorithm'
draft: false
---
공백으로 나누어진 4개의 수를 두 줄 입력받은 후, 총합이 큰 것을 출력하는 문제. max와 sum 함수를 이용하여 풀었다.
```python
n = sum(map(int, input().split()))
m = sum(map(int, input().split()))
print(max(n, m))

```