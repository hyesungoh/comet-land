---
title: 'BOJ-2824 - Python'
date: 2020-07-23 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 입력받은 후 n개의 수를 입력받는다. 모든 수를 곱한 값이 A, 같은 방식으로 m과 B를 입력받는다. A와 B의 최대공약수를 출력하는데 만약, 9자리보다 길다면, 마지막 9자리만 출력하는 문제.a % b = r일 떄, b % r = r1, r % r1 = r2와 같은 방식으로 나머지값이 0일 때까지 연산하는 유클리드 호제법을 이용하여 풀었으며 파이썬의 문자열 슬라이싱을 이용하여 9자리 이상일 때 예외처리를 하였다.
```python
def gcm(x, y):
    n = max(x, y)
    d = min(x, y)

    while (n % d) != 0:
        t = n % d
        n = d
        d = t

    return d
input()
n = eval(input().replace(' ', '*'))
input()
m = eval(input().replace(' ', '*'))
ans = str(gcm(n, m))
l = len(ans)
print(ans) if l < 9 else print(ans[l - 9 : l + 1])

```