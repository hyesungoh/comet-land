---
title: 'BOJ-2960 - Python'
date: 2020-12-22 12:21:13
category: 'Algorithm'
draft: false
---
에라토스테네스의 체 방식으로 k번째로 소수가 아닌 것을 확인한 수를 출력하는 문제. 확인한 수를 저장하는 변수를 사용하여 풀었다.
```python
def erato(n, k):
    l = [False for _ in range(0, n+1)]
    cnt = 0
    for i in range(2, n+1):
        for j in range(i, n+1, i):
            if not l[j]:
                l[j] = True
                cnt += 1
                if cnt == k:
                    return j


n, k = map(int, input().split())
print(erato(n, k))

```