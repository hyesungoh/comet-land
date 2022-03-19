---
title: 'BOJ-1676 - Python'
date: 2020-09-09 12:21:13
category: 'Algorithm'
draft: false
---
n!의 뒤에서부터 0이 몇 개까지 이어지는 지 출력하는 문제. 첫 풀이는 팩토리얼을 재귀적으로 계산하는 함수를 만든 후 reversed와 반복문을 이용하여 정수형 변수 ans를 1씩 더하여 풀었다. 다른 사람의 풀이를 보니 수식으로 풀 수 있다는 것을 알아 두번째 풀이에서 적용해 보았으며 뒷자리 0의 갯수는 2와 5의 갯수로 판단되는 것을 알게 되었다.
```python
def f(n):
    return n * f(n-1) if n > 1 else 1

n = f(int(input()))
ans = 0
for i in reversed(str(n)):
    if i == '0': ans += 1
    else: break
print(ans)

# n = int(input()) // 5
# print(n + n // 5 + n // 25)

```