---
title: 'BOJ-1193 - Python'
date: 2020-06-24 12:21:13
category: 'Algorithm'
draft: false
---
입대 전에 풀었다가 실패한 문제, [위 글](https://wlstyql.tistory.com/53)을 참조하여 풀었으며 분모, 분자의 합과 stage + 1이 같다는 것을 이용하면 다르게도 풀 수 있을 것 같다.
```python
n = int(input())
stage, key = 1, 1
while stage + key <= n:
    key += stage
    stage += 1
step = n - key
x, y = step + 1, stage - step
if stage % 2 == 0:
    print('{}/{}'.format(x, y))
else:
    print('{}/{}'.format(y, x))

```