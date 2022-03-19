---
title: 'BOJ-9461 - Python'
date: 2020-11-18 12:21:13
category: 'Algorithm'
draft: false
---
1, 1, 1, 2, 2, 3, 4, 5, 7, 9 ... 와 같은 형태인 파도반 수열을 테스트케이스만큼 n번째 파도반 수열의 값을 출력하는 문제. [1, 1, 1, 2, 2]의 list를 저장한 후 n의 최대값인 100만큼 점화식 l(i-5) + l(i-1)을 이용하여 list를 확장한 후 입력되는 n마다 해당 값을 출력하여 풀었다.
```python
l = [1, 1, 1, 2, 2]
for i in range(5, 100):
    l.append(l[i-5] + l[i-1])
for _ in range(int(input())):
    print(l[int(input())-1])

```