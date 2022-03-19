---
title: '프로그래머스-입국심사 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
n명이 입국심사를 기다리고 있다. 입국 심사관이 한 사람을 심사하는 데 걸리는 시간이 주어질 때, 모든 인원이 심사를 받는 데 걸리는 최소 시간을 반환하는 문제. 1부터 가장 심사가 오래걸리는 사람 \* 심사관의 수 + 1까지 이분탐색을 하였다. 이분탐색을 하며 mid와 모든 심사관들을 기준으로 몇 명을 심사할 수 있는 지 정한 후, n명 이상 심사를 할 수 있을 때 answer 변수를 mid 값으로 설정 후, end의 값을 mid - 1로 설정 후 재탐색하였다. n명을 심사할 수 없는 겨우 start 값을 mid + 1하여 재탐색하도록 풀었다.
```python
def solution(n, times):
    answer = 0

    length = len(times)
    start, end = 1, (length+1) * max(times)
    while start <= end:
        mid = (start + end) // 2

        count = 0
        for time in times:
            count += mid // time
            if count >= n: break

        if count >= n:
            answer = mid
            end = mid - 1
        else: start = mid + 1

    return answer

```