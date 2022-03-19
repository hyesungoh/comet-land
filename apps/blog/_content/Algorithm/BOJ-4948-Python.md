---
title: 'BOJ-4948 - Python'
date: 2020-11-26 12:21:13
category: 'Algorithm'
draft: false
---
베르트랑 공준이란 임의의 자연수 n은 n보다 크며 2n과 같거나 작은 수중에 적어도 하나의 소수가 존재한다는 내용이다. 0이 입력되기 까지 정수를 입력받은 후 각 수들보다 크며 2n보다 같으며 작은 소수들의 수를 출력하는 문제. 입력받은 수들을 리스트에 저장하며 제일 큰 수를 저장한다. 그 후 에라토스테네스의 체 방법을 이용하여 제일 큰 수 \* 2한 값까지의 소수를 확인 후 리스트에 든 값을 이용하여 슬라이싱 후 count하여 풀었다.
```python
def erato(n):
    sieve = [True for _ in range(n+1)]
    sieve[1] = False
    m = int(n ** 0.5)

    for i in range(2, m+1):
        if sieve[i]:
            for j in range(i+i, n+1, i):
                sieve[j] = False

    return sieve


l = []
mn = 0
while True:
    n = int(input())
    if not n:
        break
    l.append(n)
    mn = max(mn, n)

sieve = erato(2 * mn)

for i in l:
    print(sieve[i+1:(2*i)+1].count(True))

```