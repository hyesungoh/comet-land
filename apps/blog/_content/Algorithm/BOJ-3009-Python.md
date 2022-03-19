---
title: 'BOJ-3009 - Python'
date: 2020-08-02 12:21:13
category: 'Algorithm'
draft: false
---
x y 형태로 입력되는 3개의 점의 좌표를 입력받은 후 직사각형을 만들기 위해 필요한 네 번째 점의 좌표를 구하는 문제. 첫 풀이는 x와 y 좌표의 딕셔너리를 만들어 몇 번 나왔는 지 확인하기 위해 key에 좌표를, value에 in 연산자를 이용하여 해당하는 값을 넣어주었다. 그 후 dict.items()를 반복돌며 value가 1인 key를 출력하는 형태로 풀었다. 이 과정이 직관적이긴 하여도 효율적이지 못하다는 생각이 들어 두 번째 풀이는 XOR 연산자를 이용하여 풀 수 있다는 참고를 받아 풀어보았다. 첫 번째 풀이보다 상당히 효율적이라 생각한다.
```python
# l = []
# for i in range(3):
#     l.append(input().split())
#
# x_d, y_d = {}, {}
# for x, y in l:
#     x_d[x] = (2 if x in x_d else 1)
#     y_d[y] = (2 if y in y_d else 1)
#
# for k, v in x_d.items():
#     if v == 1:
#         print(k, end=" ")
#
# for k, v in y_d.items():
#     if v == 1:
#         print(k)

x, y = 0, 0
for _ in range(3):
    a, b = map(int, input().split())
    x ^= a
    y ^= b
print(x, y)

```