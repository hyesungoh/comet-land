---
title: 'BOJ-1978 - Python'
date: 2020-11-19 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수를 입력받은 후, 소수가 몇개인지 출력하는 문제. 에라토스테네스의 체를 이용하여 입력된 수 중 가장 큰 수까지 소수 리스트를 만든 후 입력된 수들을 기준으로 반복을 수행해 수를 세는 방식으로 풀었다.
```python
def erato(n):
    m = int(n ** 0.5)
    sieve = [True for _ in range(n+1)]
    sieve[1] = False

    for i in range(2, m+1):
        if sieve[i]:
            for j in range(i+i, n+1, i):
                sieve[j] = False
    return sieve

input()
l = list(map(int, input().split()))
max_n = max(l)
prime_l = erato(max_n)
ans = 0
for i in l:
    if prime_l[i]:
        ans += 1
print(ans)

```