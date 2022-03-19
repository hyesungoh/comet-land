---
title: 'BOJ-2581 - Python'
date: 2020-11-20 12:21:13
category: 'Algorithm'
draft: false
---
n 이상 m 이하의 수 중에 소수의 합과 제일 작은 소수를 출력하며 소수가 없을 시 -1을 출력하는 문제. 에라토스테네스의 체를 이용하여 m 이하의 소수 리스트를 만든 후 n부터 m까지를 기준으로 반복문을 돌아 연산하여 풀었다.
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

n = int(input())
m = int(input())
ans = 0
min_n = False
prime_list = erato()

for i in range(n, m+1):
    if prime_list[i]:
        ans += i
        if not min_n:
            min_n = i

print(("%d\n%d" %(ans, min_n)) if ans != 0 else -1)

```