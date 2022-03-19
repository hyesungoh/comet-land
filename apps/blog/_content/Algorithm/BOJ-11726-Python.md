---
title: 'BOJ-11726 - Python'
date: 2020-09-24 12:21:13
category: 'Algorithm'
draft: false
---
2xN 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 10,007로 나눈 나머지를 출력하는 문제. N이 1일 때 1, 2일 때 2, 3일 때 3, 4일 때 5, 5일 때 8이다. 이를 통해 n[i] = n[i-2] + n[i-1]인 규칙을 알아내어 리스트를 [-2::]로 슬라이싱한 값을 sum함수를 이용하여 풀었다.
```python
l = [0, 1, 2]
for _ in range(9997):
    l.append(sum(l[-2::]))
print(l[int(input())] % 10007)

```