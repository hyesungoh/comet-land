---
title: '프로그래머스-더맵게 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
모든 음식의 스코빌 지수가 주어지고, 모든 음식의 스코빌 지수가 k 이상이 되게 하고 싶다. 이 때 가장 맵지 않은 음식 + 두 번째로 맵지 않은 음식 \* 2를 하여 섞을 수 있을 때 몇 번 섞어야 모든 음식이 k 스코빌 이상인 지 반환하는 문제. heap 연산을 이용해 제일 첫 번째 요소와 k를 비교해서 반환하여 풀었다.
```python
import heapq

def solution(scov, k):
    heapq.heapify(scov)
    cnt = 0
    length = len(scov)
    first = heapq.heappop(scov)

    while length > 1:
        second = heapq.heappop(scov)
        first = heapq.heappushpop(scov, first + second + second)

        if first >= k:
            return cnt + 1
        cnt += 1
        length -= 1

    return -1

```