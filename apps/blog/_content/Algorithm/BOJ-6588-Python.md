---
title: 'BOJ-6588 - Python'
date: 2020-12-22 12:21:13
category: 'Algorithm'
draft: false
---
위 문제와 동일한 골드바흐 파티션을 출력하는 문제. 다른 점은 n2 - n1이 제일 큰 조합을 출력하는 것과 골드바흐 파티션이 존재하지 않는 예외를 처리하는 것이다. 골드바흐 파티션을 찾는 즉시 반환하는 함수를 만들어 사용하였으며 반복문이 끝날 시 존재하지 않을 때 출력할 문장을 반환하여 풀었다.
```python
import sys
input = sys.stdin.readline

def get_prime(n):
    sieve = [True for _ in range(n+1)]
    sieve[1] = False
    mn = int(n ** 0.5)

    for i in range(1, mn+1):
        if sieve[i]:
            for j in range(i+i, n+1, i):
                sieve[j] = False

    return sieve

def goldbach(n):
    n1, n2 = 0, 0
    for i in range(2, (n // 2) + 1):
        if prime[i] and prime[n-i]:
            n1, n2 = i, n-i
            return "%d = %d + %d" %(n, n1, n2)
    return "Goldbach's conjecture is wrong."

l = []
while True:
    n = int(input())
    if n == 0:
        break
    l.append(n)

prime = get_prime(max(l))

for n in l:
    print(goldbach(n))

```