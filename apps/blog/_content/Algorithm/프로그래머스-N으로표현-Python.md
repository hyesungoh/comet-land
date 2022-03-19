---
title: '프로그래머스-N으로표현 - Python'
date: 2021-3-6 12:21:13
category: 'Algorithm'
draft: false
---
숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 반환하는 문제. 최솟값이 8보다 클 시 -1을 반환하기 때문에 1부터 7까지의 경우의 수만을 확인하였다. set 자료형을 이용하여 1부터 8까지 n이 이어붙어져 있는 수들로 이루어진 배열을 만들었다. 그 후 i에 대해서 1부터 7까지, j에 대해서 0부터 i까지 반복을 수행한다. i가 4일 시, 1로 만들 수 있는 수 + 3으로 만들 수 있는 수, 2 + 2, 3 + 1의 규칙을 이용하여 각 sets에 들어있는 요소들을 사칙연산한 후, 해당 sets에 들어있을 시 i를 반환, 반복 종료 시 -1을 반환하여 풀었다. [해당 게시물](https://gurumee92.tistory.com/164)을 참고하였다.
```python
def solution(N, number):
    if N == number:
        return 1

    sets = []
    for i in range(1, 8):
        t = [int(str(N) * i)]
        sets.append(set(t))

    for i in range(1, 8):
        for j in range(i):
            for i_set in sets[j]:
                for j_set in sets[i-j-1]:
                    sets[i].add(i_set + j_set)
                    sets[i].add(i_set - j_set)
                    sets[i].add(i_set * j_set)
                    if j_set != 0:
                        sets[i].add(i_set // j_set)

        if number in sets[i]:
            return i + 1
    else:
        return -1

```