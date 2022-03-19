---
title: '프로그래머스-주식가격 - Python'
date: 2021-3-8 12:21:13
category: 'Algorithm'
draft: false
---
초 단위로 기록된 주식가격이 담긴 배열이 주어진다. 가격이 떨어지지 않은 기간은 몇 초인지를 반환하는 문제. deque를 이용해 popleft하여 남은 값들과 비교하여 풀었다.
```python
from collections import deque

def solution(prices):
    prices = deque(prices)
    answer = []

    while prices:
        now = prices.popleft()
        cnt = 0
        for next in prices:
            cnt += 1
            if now > next: break
        answer.append(cnt)

    return answer

```