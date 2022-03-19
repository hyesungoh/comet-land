---
title: 'BOJ-2562 - Python'
date: 2020-06-26 12:21:13
category: 'Algorithm'
draft: false
---
9가지의 수를 입력받고 그 중 재일 큰 수와, 그 수가 몇 번째로 입력 되었는 지 출력하는 문제.max를 이용하여 숏코딩을 할 수 있었지만 반복문을 한 번 사용하여 확인을 하는 것이 더욱 효율적이라 생각돼 이 방법을 택했다.
```python
temp, j = 0, 0
for i in range(1,10):
    x = int(input())
    if  x > temp:
        j = i
        temp = x
print(temp)
print(j)

# x=[int(input()) for a in range(9)]
# print(max(x),x.index(max(x))+1)

```