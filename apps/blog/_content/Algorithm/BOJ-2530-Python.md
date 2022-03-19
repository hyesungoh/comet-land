---
title: 'BOJ-2530 - Python'
date: 2020-08-26 12:21:13
category: 'Algorithm'
draft: false
---
공백을 기준으로 나누어진 시간, 분, 초를 입력받은 후 초를 입력받아 시간을 계산해서 출력하는 문제. 입력받은 시간을 초로 계산 후 더한 다음, 다시 계산하여 풀었다.
```python
h, m, s = map(int, input().split())
total = (h*60*60) + (m*60) + s + int(input())
total %= (24*60*60)
print(total // 3600, (total % 3600) // 60, (total % 3600) % 60)

```