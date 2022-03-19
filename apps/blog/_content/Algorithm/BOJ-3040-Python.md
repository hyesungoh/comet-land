---
title: 'BOJ-3040 - Python'
date: 2020-07-11 12:21:13
category: 'Algorithm'
draft: false
---
9개의 수를 입력받고 합이 100인 7개의 수를 찾는 문제. 이중 반복문을 이용하여 9개의 수를 전부 합한 값에 100을 뺀 값과 비교를 하여 찾은 후 list.remove()하여 풀었다. 다른 풀이는 sum - 100 - 현재 반복중인 값 i으로 비교할 수를 구하고 그 수를 in 연산자를 이용하여 찾아 없애는 풀이다.
```python
l, s, d = [], 0, False
for _ in range(9):
    n = int(input())
    l.append(n); s += n

for i in range(9):
    for j in range(i+1, 9):
        t1, t2 = l[i], l[j]
        if t1 + t2 == s - 100:
            l.remove(t1)
            l.remove(t2)
            d = True
            break
    if d: break

[print(i) for i in sorted(l)]

# a=[]
# for i in range(9):a.append(int(input()))
# b=sum(a)
# for i in a:
#     c=b-100-i
#     if c in a and i!=c:a.remove(i);a.remove(c)
# for i in a:print(i)

```