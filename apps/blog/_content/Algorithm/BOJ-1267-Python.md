---
title: 'BOJ-1267 - Python'
date: 2020-08-28 12:21:13
category: 'Algorithm'
draft: false
---
휴대폰 요금제 2개가 있을 떄 어떤 요금제가 더욱 싼지 출력하는 문제. 나누기 연산과 삼항 연산자를 이용하여 풀었다.
```python
Y, M = 0, 0
input()
for i in map(int, input().split()):
    Y += (i // 30 + 1) * 10
    M += (i // 60 + 1) * 15
print('M ' + str(M) if Y > M else 'Y M ' + str(M) if Y == M else 'Y ' + str(Y))

```