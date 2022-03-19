---
title: 'BOJ-1026 - Python'
date: 2020-07-13 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수로 이루어진 두개의 배열을 입력받는다. 두 배열의 요소들을 각각 곱한 값들 중 최솟값을 출력하는 문제. 첫 풀이는 n번 반복하며 min과 max를 이용하여 곱한 값을 더해주었다. 두번째 풀이는 sorted와 map, lambda를 이용하여 조금 더 간단히 풀었다.
```python
# n = int(input())
# l1 = list(map(int, input().split()))
# l2 = list(map(int, input().split()))
# ans = 0
# for _ in range(n):
#     t1, t2 = min(l1), max(l2)
#     ans += t1 * t2
#     l1.remove(t1); l2.remove(t2)
# print(ans)

input()
l1 = map(int, input().split())
l2 = map(int, input().split())
print(sum(map(lambda x, y: x * y, sorted(l1), sorted(l2, reverse=True))))

```