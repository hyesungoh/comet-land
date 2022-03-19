---
title: 'BOJ-2884 - Python'
date: 2020-06-22 12:21:13
category: 'Algorithm'
draft: false
---
24시간 기준으로 45분을 뺀 시각을 출력하는 문제, 입력받은 분에 45를 뺀 값으로 비교를 했으며 0시 일 때를 따로 확인하여 23시로 바꿔주었다.
```python
h, m = list(map(int, input().split()))
m -= 45
if m < 0:
    if h == 0:
        print(23, 60 + m)
    else:
        print(h-1, 60 + m)
else:
    print(h, m)

```