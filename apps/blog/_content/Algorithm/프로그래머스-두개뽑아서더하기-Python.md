---
title: '프로그래머스-두개뽑아서더하기 - Python'
date: 2021-2-20 12:21:13
category: 'Algorithm'
draft: false
---
정수로 이루어진 배열이 주어지고 해당 배열의 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 문제 인덱스가 겹치지 않도록 이중 반복을 수행하며 set 자료형에 더하여 반복문 종료시 해당 set을 정렬한 list로 반환하여 풀었다.
```python
def solution(numbers):
    answers = set()
    n = len(numbers)
    for i in range(n):
        for j in range(i+1, n):
            answers.add(numbers[i] + numbers[j])

    return list(sorted(answers))

```