---
title: 'BOJ-4796 - Python'
date: 2021-2-27 12:21:13
category: 'Algorithm'
draft: false
---
연속되는 p일 동안 l일만 캠핑장을 이용할 수 있다고 한다. 이 때 휴가 v일 동안 최대 캠핑장을 며칠간 이용할 수 있는 지 출력하는 문제. v // p \* l 값을 변수에 저장 후, 남은 휴가 중 캠핑장을 이용할 수 있는 수(휴가 일 수 - v // p에 p를 곱한 값)과 l을 비교하여 l이 더 클 시 남은 휴가 중 캠핑장을 이용할 수 있는 수를 아닐 시 l을 더해주어 풀었다.
```python
import sys
input = sys.stdin.readline

i = 1
while True:
    l, p, v = map(int, input().split())
    if l == p == v == 0:
        break

    vp = v // p
    ans = vp * l
    ans += (v - vp * p) if l > (v - vp * p) else l

    print("Case %d: %d" %(i, ans))
    i += 1

```