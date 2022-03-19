---
title: 'BOJ-1475 - Python'
date: 2020-11-29 12:21:13
category: 'Algorithm'
draft: false
---
6과 9를 같이 쓸 수 있을 때 방번호를 꾸밀 때 필요한 0부터 9까지 들은 세트의 수를 출력하는 문제. 입력되는 수를 기준으로 반복하여 개수를 저장할 때, 9와 6을 동시에 저장하며 반복이 끝난 후 2로 나눈 값을 올림하여 저장한다. 그 후 리스트에 저장된 값 중 제일 큰 값을 출력하여 풀었다.
```python
from math import ceil

l = [0 for _ in range(10)]
n = list(map(int, input()))

for i in n:
    if i == 9:
        l[6] += 1
        continue
    l[i] += 1

l[6] = ceil(l[6] / 2)
print(max(l))

```