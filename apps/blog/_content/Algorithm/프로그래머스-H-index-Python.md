---
title: '프로그래머스-H-index - Python'
date: 2021-2-24 12:21:13
category: 'Algorithm'
draft: false
---
어느 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면, h의 최대값이 과학자의 H-index라고 한다. 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열이 주어질 때 H-index를 구하는 문제. 그리디 방식을 이용하여 내림차순으로 정렬 후, 0부터 n-1까지 반복문을 수행하였다. 인덱스 i가 정렬된 i번째 값보다 클 시 i를 반환하여 풀었다. 배열의 값이 모두 동일할 시 반환이 되지 않아 마지막에 길이를 반환해 주었다.
```python
def solution(cita):
    length = len(cita)
    cita.sort(reverse=True)

    for i in range(length):
        if i >= cita[i]:
            return i

    return length

```