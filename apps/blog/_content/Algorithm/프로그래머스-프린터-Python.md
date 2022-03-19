---
title: '프로그래머스-프린터 - Python'
date: 2021-3-2 12:21:13
category: 'Algorithm'
draft: false
---
프린터에 예약된 문서들의 중요도와 인덱스를 입력받는다. 해당 프린터는 제일 왼쪽의 문서의 중요도와 예약된 문서들의 중요도를 비교하여 더욱 높은 값이 있을 시 예약의 가장 오른쪽에 넣는다. 아닐 시 해당 문서를 출력한다. 주어진 인덱스의 문서가 몇 번째로 출력되는 지 반환하는 문제. 주어지는 중요도와 문서의 인덱스 값으로 이루어진 배열을 deque화 한 후, 위의 로직을 구현하여 popleft한 인덱스 값과 주어진 인덱스 값을 비교하여 풀었다.
```python
from collections import deque

def solution(pri, loca):
    docs = deque([i for i in range(len(pri))])
    pri = deque(pri)
    ans = 1

    while docs:
        n_doc = docs.popleft()
        n_pri = pri.popleft()

        for o_pri in pri:
            if o_pri > n_pri:
                pri.append(n_pri)
                docs.append(n_doc)
                break
        else:
            if n_doc == loca:
                return ans
            ans += 1

```