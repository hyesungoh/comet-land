---
title: 'BOJ-1725 - Python'
date: 2021-1-6 12:21:13
category: 'Algorithm'
draft: false
---
히스토그램의 각 직사각형의 높이를 입력받은 후 가장 큰 직사각형의 넓이를 출력하는 문제. 위 문제와 TC 존재 여부만 다르다. 그렇기 때문에 동일한 스택을 사용하는 방법을 이용하여 풀었다. 자세한 풀이는 위 문제의 주석을 참고
```python
import sys
input = sys.stdin.readline

def checkArea(n, l):
    checked = [0]
    area = 0

    for i in range(1, n+2):
        while checked and (l[i] < l[checked[-1]]):
            current_height = checked.pop()
            area = max(area, (i - 1 - checked[-1]) * l[current_height])
        checked.append(i)

    return area

n = int(input())
l = [0]
for _ in range(n):
    l.append(int(input()))
l.append(0)
print(checkArea(n, l))

```