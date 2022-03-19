---
title: 'BOJ-2789 - Python'
date: 2020-07-10 12:21:13
category: 'Algorithm'
draft: false
---
문자열을 입력받은 후 'CAMBRIDGE'에 포함된 알파벳을 모두 지워 출력하는 문제. 파이썬의 in 연산자를 사용하여 풀었다.
```python
l = ['C', 'A', 'M', 'B', 'R', 'I', 'D', 'G', 'E']
s = []
for w in input():
    if w not in l:
        s.append(w)
print(''.join(s))

```