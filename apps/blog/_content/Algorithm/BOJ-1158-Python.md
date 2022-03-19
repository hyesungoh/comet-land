---
title: 'BOJ-1158 - Python'
date: 2020-11-1 12:21:13
category: 'Algorithm'
draft: false
---
1번부터 n번까지의 사람들이 원을 이루며 앉아있을 때 순서대로 k번째 사람들을 제거한다. 제거된 사람의 순서를 출력하는 '요세푸스 순열' 문제. 1부터 n까지의 리스트와 정답이 들어갈 빈 리스트, 몇번째 요소를 pop할지를 관리할 정수형 변수를 이용했다. 정답 리스트의 길이가 n이 아닐 때까지 반복, 'i = (i + (k-1)) % n까지 들어있는 리스트의 길이'를 계산하여 pop한 값을 빈리스트에 넣어 출력하여 풀었다.
```python
n, k = map(int, input().split())
n_l = list(range(1, n+1))
l = []
i = 0

while len(l) != n:
    i = (i + (k-1)) % len(n_l)
    l.append(str(n_l.pop(i)))
print("<%s>"%', '.join(l))

```