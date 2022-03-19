---
title: 'BOJ-1929 - Python'
date: 2020-11-21 12:21:13
category: 'Algorithm'
draft: false
---
정수 n, m을 입력받은 후 n 이상, m 이하의 수들 중에 소수인 것을 출력하는 문제. m까지 소수인 수를 True로 저장하는 리스트를 에라토스테네스의 체 방법을 사용하여 저장 후 n부터 m까지 반복을 수행하여 풀었다.
```python
def erato():
    sieve = [True for _ in range(m+1)]
    sieve[1] = False
    max_n = int(m ** 0.5)

    for i in range(2, max_n+1):
        if sieve[i]:
            for j in range(i+i, m+1, i):
                sieve[j] = False

    return sieve


n, m = map(int, input().split())
l = erato()
for i in range(n, m+1):
    if l[i]:
        print(i)

```