---
title: 'BOJ-11399 - Python'
date: 2020-09-29 12:21:13
category: 'Algorithm'
draft: false
---
정수 n명의 사람이 ATM기를 이용하는데 걸리는 시간을 공백으로 나눠 입력받는다. 이 때 모든 사람들이 걸리는 시간의 최소합을 출력하는 문제. 그리디 알고리즘을 사용하여 sorted 함수를 이용하여 풀었다. 첫번째 풀이는 n+1까지 반복문을 수행하며 리스트를 [0:i]로 슬라이싱한 값을 sum을 이용하여 더한 값을 출력하여 풀었다. 다음 풀이는 입력받은 리스트를 이용하여 반복문을 수행하며 t에 현재 반복인자가 걸리는 시간을 더하며 다른 변수 ans에 t를 더하는 식으로 풀었다.
```python
# n = int(input())
# l = sorted(map(int, input().split()))
# ans = 0
# for i in range(n+1):
#     ans += sum(l[0:i])
# print(ans)

input()
ans, t = 0, 0
for i in sorted(map(int, input().split())):
    t += i
    ans += t
print(ans)

```