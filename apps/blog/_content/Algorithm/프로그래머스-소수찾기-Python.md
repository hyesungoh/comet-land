---
title: '프로그래머스-소수찾기 - Python'
date: 2021-3-9 12:21:13
category: 'Algorithm'
draft: false
---
한자리 숫자가 적힌 종이 조각이 흩어져있다. 흩어진 종지 조각을 붙여 소수를 몇 개 만들 수 있는 지 반환하는 문제. 주어지는 종이 조각, 즉 문자열을 기준으로 백트래킹 방법을 이용해 모든 경우의 수들을 set 자료형을 이용해 중복없이 확인하였다. 그 중 제일 큰 수를 이용하여 에라토스테네스 체 방법을 이용해 해당 수 까지의 소수는 False로 저장되는 배열을 만들었다. set에 들어있는 수들이 소수일 때 정수형 변수 값을 늘려 풀었다.
```python
def solution(numbers):
    def bt(depth):
        if number: number_set.add(int(''.join(number)))
        if depth == length: return

        for i in range(length):
            if not visit[i]:
                number.append(numbers[i])
                visit[i] = True

                bt(depth+1)

                number.pop()
                visit[i] = False

    def sieve():
        is_prime[0] = False
        is_prime[1] = False

        for i in range(2, int(max_num ** 0.5)):
            if is_prime[i]:
                for j in range(i+i, max_num+1, i):
                    is_prime[j] = False

    length = len(numbers)
    visit = [False for _ in range(length)]
    number_set = set()
    number = []
    bt(0)

    max_num = max(number_set)
    is_prime = [True for _ in range(max_num+1)]
    sieve()

    ans = 0
    for n in number_set:
        if is_prime[n]: ans += 1

    return ans

```