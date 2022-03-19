---
title: 'BOJ-11004 - Python'
date: 2020-12-21 12:21:13
category: 'Algorithm'
draft: false
---
입력되는 수열을 올림차순으로 정렬하여 k번째 수를 출력하는 문제. sorted 메소를 이용하여 정렬 후 인덱스를 출력하여 풀었다.
```python
n, k = map(int, input().split())
l = sorted(map(int, input().split()))
print(l[k-1])

```