---
title: 'BOJ-1330 - Python'
date: 2020-06-17 12:21:13
category: 'Algorithm'
draft: false
---
동시에 입력되는 두 수를 비교한 결과를 출력하는 문제,map 함수를 이용하여 아주 조금은 효율적으로 풀지 않았나 생각한다.
```python
n = list(map(int, input().split()))
if n[0] == n[1]:
    print("==")
elif n[0] > n[1]:
    print(">")
else:
    print("<")

```