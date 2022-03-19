---
title: 'BOJ-10996 - Python'
date: 2020-06-24 12:21:13
category: 'Algorithm'
draft: false
---
별 찍기, 처음보는 유형의 별 찍기여서 상당히 헤맸다.찾은 규칙으로는 열의 수는 n\*2인 것과 / 한 열에 별과 공백의 총 수는 n / 홀수열일 때 별으로 시작이였다.첫 풀이는 이를 가지고 이중 반복문으로 구현을 했다.다른 풀이는 나와 달리 반복문 한 개를 가지고 구현했는데 n을 2로 나눈 값을 가지고 구현했는데 조금 더 생각해보면 나도 생각할 수 있었을 것 같다. ~~화이팅~~
```python
# 첫 풀이
n = int(input())
for i in range(n*2):
    for j in range(n):
        if (i + j) % 2 == 0:
            print("*", end="")
        else:
            print(" ", end="")
    print("")

# 다른 풀이
n = int(input())
for i in range(n):
    print("* " * (n - n//2))
    print(" *" * (n//2))

```