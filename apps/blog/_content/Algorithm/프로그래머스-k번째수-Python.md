---
title: '프로그래머스-k번째수 - Python'
date: 2021-2-22 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 배열 array와 3개의 정수가 들어가 있는 배열들로 구성된 배열 commands를 입력받는다. 그 후 각 commands 마다 array s부터 e까지 수들 중 오름차순으로 정렬하여 k번째 수를 배열에 담아 해당 배열을 반환하면되는 문제. for in 문과 리스트 슬라이싱, sorted 메소드를 활용하여 간단히 풀었다.
```python
def solution(array, commands):
    answer = []

    for s, e, k in commands:
        tarr = sorted(array[s - 1:e])
        answer.append(tarr[k - 1])

    return answer

```