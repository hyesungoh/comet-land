---
title: '프로그래머스-멀쩡한사각형 - Python'
date: 2021-2-21 12:21:13
category: 'Algorithm'
draft: false
---
가로 길이가 W, 세로 길이가 H인 직사각형이 았다. 종이는 1, 1 크기의 격자 형태로 선이 그어져 있다. 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았을 때, 온전한 사각형의 수를 구하는 문제. 최대공약수를 이용해야하는 것은 알았지만 어떤 방식으로 이용해야되는 지 감을 잡기 어려웠다. [검색](https://taesan94.tistory.com/55F)을 통해 (w \* h) - (w + h - gcd(w, h))가 공식인 것을 알게 됐다. 첫 번째 풀이는 유클리드 호제 방법을 이용하여 최대공약수를 구하는 것을 작성하여 풀었으며 두 번째 풀이는 내장 라이브러리의 gcd를 이용하여 풀었다.
```python
def gcd(x, y):
    while y:
        x, y = y, x % y
    return x


def solution(w, h):
    n = gcd(w, h)
    return (w * h) - (w + h - n)

# from math import gcd
#
# def solution(w, h):
#     return (w * h) - (w + h - gcd(w, h))

```