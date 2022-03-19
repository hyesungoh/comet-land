---
title: '프로그래머스-카펫 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
문제의 그림과 같은 격자 모양 카펫이 있을 때, 갈색과 노란색의 수를 통해 전체 카펫의 크기를 반환하는 문제. 가로 크기에 대해서 갈색과 노란색을 합한 수부터 3까지 반복을 한다. 전체수에 가로 크기를 나눈 값이 세로가 되며, 주어진 노란색 타일의 수와 `(x-2)*(y-2)`값을 비교하여 맞을 시 [x, y]를 반환하여 풀었다.
```python
def solution(brown, yellow):
    total = brown + yellow
    for x in range(total, 2, -1):
        if total % x == 0:
            y = total // x
            if yellow == (x-2)*(y-2):
                return [x, y]

```