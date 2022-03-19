---
title: 'BOJ-2851 - Python'
date: 2020-11-4 12:21:13
category: 'Algorithm'
draft: false
---
10개의 수열이 입력되며 순서대로 합을 계산할 수 있다. 이 때 처음부터 합할 때 100과 제일 가까운 수를 출력하는 문제. 매 입력마다 절댓값을 이용하여 저번 합과 현재 입력된 값 + 저번 합을 100과의 차이를 이용하여 비교해 저장 후 출력하여 풀었다.
```python
s, ans = 0, 0
for _ in range(10):
    n = int(input())
    if abs(100 - s) >= abs(100 - s - n):
        ans = s + n
    s += n
print(ans)

```