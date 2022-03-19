---
title: 'BOJ-16430 - Python'
date: 2020-07-23 12:21:13
category: 'Algorithm'
draft: false
---
1kg의 치즈가 있을 때, a/b kg을 도둑맞았다고 할 때 남은 치즈의 무게를 출력하는 문제. b-a와 b를 공백으로 나누어 출력하여 풀었다.
```python
a, b = map(int, input().split())
print(b-a, b)

```