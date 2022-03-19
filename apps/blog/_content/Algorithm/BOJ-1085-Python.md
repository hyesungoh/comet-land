---
title: 'BOJ-1085 - Python'
date: 2020-08-16 12:21:13
category: 'Algorithm'
draft: false
---
x, y, w, h를 입력받는 다. (x, y)는 현재 내 위치이고, 사각형의 왼쪽 아랫점은 (0, 0), 오른쪽 위의 점은 (w, h)라고 할 때 사각형 밖으로 나갈 수 있는 제일 짧은 거리를 출력하는 문제. min을 사용하여 x, y, w-x, h-y를 비교하여 풀었다.
```python
x, y, w, h = map(int, input().split())
print(min(x, y, w-x, h-y))

```