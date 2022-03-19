---
title: 'BOJ-9020 - Python'
date: 2020-12-22 12:21:13
category: 'Algorithm'
draft: false
---
골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다. 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다. 2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 문제. 입력되는 수들 중 제일 큰 수를 기준으로 에라토스테네스 방식을 이용하여 소수인 수가 True로 저장돼 있는 리스트를 이용하여 n//2+1까지 n-i, i 둘 다 소수일 때를 저장하여 풀었다.
```python
def get_prime(n):
    sieve = [True for _ in range(n+1)]
    sieve[1] = False
    mn = int(n ** 0.5)

    for i in range(1, mn+1):
        if sieve[i]:
            for j in range(i+i, n+1, i):
                sieve[j] = False

    return sieve

l = []
for _ in range(int(input())):
    l.append(int(input()))

ans = []
prime = get_prime(max(l))

for n in l:
    n1, n2 = 0, 0
    for i in range(2, (n//2)+1):
        if prime[i] and prime[n-i]:
            n1, n2 = i, n-i
    print(n1, n2)

```