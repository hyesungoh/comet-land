---
title: 'BOJ-5532 - Python'
date: 2020-09-19 12:21:13
category: 'Algorithm'
draft: false
---
방학의 일수, 국어 숙제량 A, 수학 숙제량 B, 하루에 풀 수 있는 국어, 수학 숙제량 각 C, D라고 할 때 숙제를 안하고 노는 방학의 일수를 출력하는 문제. 삼항 연산자를 이용하여 나누기, 나누기 값 연산을 비교해서 풀었다. 다른 사람의 풀이로는 (A+C-1)//C와 같은 연산을 이용하여 푼 것을 배웠으며 내 수학적 사고능력이 너무 부족하다 생각된다.
```python
l = []
for _ in range(5):
    l.append(int(input()))
n1 = (l[1] // l[3] + 1 if l[1] / l[3] > l[1] // l[3] else l[1] // l[3])
n2 = (l[2] // l[4] + 1 if l[2] / l[4] > l[2] // l[4] else l[2] // l[4])
print(l[0] - max(n1, n2))

# n,a,b,q,w=map(lambda x: int(input()),range(5))
# print(n-max((a+q-1)//q,(w+b-1)//w))

```