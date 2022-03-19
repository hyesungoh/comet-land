---
title: 'BOJ-1225 - Python'
date: 2020-10-21 12:21:13
category: 'Algorithm'
draft: false
---
12 과 34가 입력 됐을 때, 1x3 + 1x4 + 2x3 + 2x4처럼 두 수의 각 자리수를 곱하여 더한 값을 출력하는 문제. 0을 replace로 없애 시간을 줄였으며 그 후 이중반복문을 이용하여 계산하였다.
```python
n, m = input().split(); ans = 0
n = n.replace('0', '')
m = m.replace('0', '')
for i in n:
    for j in m:
        ans += int(i)*int(j)
print(ans)

```