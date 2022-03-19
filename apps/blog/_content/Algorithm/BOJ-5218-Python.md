---
title: 'BOJ-5218 - Python'
date: 2020-10-15 12:21:13
category: 'Algorithm'
draft: false
---
테스트 케이스가 주어진 후 공백으로 구분된 길이가 똑같은 단어가 입력된다. 각 단어의 자릿수마다 차이값을 출력하는 문제. 'B'와 'D' 사이의 거리는 4 - 2 = 2이고, 'D'와 'B' 사이의 거리는 (2+26) - 4 = 24처럼 차이값을 계산하면 된다. 계산을 위한 함수를 구현했으며 아스키코드 값을 반환하는 ord 함수를 이용하여 풀었다.
```python
import sys
input = sys.stdin.readline

def cal(n, m):
    if n <= m:
        return m - n
    else:
        return m + 26 - n

for _ in range(int(input())):
    l1, l2 = input().split()
    print('Distances: ', end='')
    for i in range(len(l1)):
        print(cal(ord(l1[i]), ord(l2[i])), end=' ')
    print()

```