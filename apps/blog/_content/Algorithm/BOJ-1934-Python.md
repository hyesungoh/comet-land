---
title: 'BOJ-1934 - Python'
date: 2020-11-23 12:21:13
category: 'Algorithm'
draft: false
---
테스트케이스만큼 두 수를 입력받은 후 두 수의 최소공배수를 출력하는 문제. `a, b = b, a % b`인 유클리드 호제법을 이용해 최대공약수를 구한 후 x \* y를 위 방법을 통해 구한 최대공약수로 나눈 값을 출력하여 풀었다.
```python
def uc(x, y):
    while y:
        x, y = y, x%y
    return x

def lcm(x, y):
    return (x * y //uc(x, y))

for _ in range(int(input())):
    n, m = map(int, input().split())
    print(lcm(n, m))

```