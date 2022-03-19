---
title: 'BOJ-10886 - Python'
date: 2020-10-6 12:21:13
category: 'Algorithm'
draft: false
---
0과 1을 n개 입력받은 후 더 많이 입력된 값에 해당하는 문자열을 출력하는 문제. 정수형 변수에 삼항연산자를 사용하여 1을 더하거나 빼었다. 그 후 0과 크기를 비교하여 문자열을 삼항연산자를 사용하여 출력해 풀었다.
```python
y = 0
for _ in range(int(input())):
    y = y + 1 if input() == '1' else y - 1
print('Junhee is cute!' if y > 0 else 'Junhee is not cute!')

```