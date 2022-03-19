---
title: 'BOJ-2523 - Python'
date: 2020-06-23 12:21:13
category: 'Algorithm'
draft: false
---
입력받은 수까지 올라갔다가 다시 내려가는 별 찍기 문제, 처음엔 1부터 n까지, n에서 1까지의 range를 합치고 n이 1일 때를 예외처리 했다. ([,1] 이렇게 되기 때문)다른 풀이는 출력문에 + n \* 절댓값(i)를 해주고 n-1 ~ -n 까지 -1되는 range를 만들었다.(n이 3일 때 [2,1,0,-1,-2])역시 별 찍기가 뇌를 깨우기 좋은 것 같다.
```python
# 2523
# x = int(input())
# l = list(range(1, x)) + list(range(x, 0, -1))
# if x == 1:
#     print("*")
# else:
#     for i in l:
#         print("*" * i)

n = int(input())
for i in range(n-1, -n, -1):
    print("*" * (n-abs(i)))

```