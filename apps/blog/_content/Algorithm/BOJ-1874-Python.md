---
title: 'BOJ-1874 - Python'
date: 2020-12-22 12:21:13
category: 'Algorithm'
draft: false
---
스택에 수를 push 할 때 1부터 오름차순으로 할 때 주어지는 수열을 push와 pop을 이용하여 만들 수 있는 지 여부와 있을 때 연산의 과정을 출력하는 문제. 수열에 입력되는 수와 스택의 마지막 값과 비교하여 마지막 값보다 클 시 스택에 들어왔던 제일 큰 수부터 입력된 수까지 연산을, 마지막 값보다 작을 시는 마지막 값과 같은 지를 확인하여 만들 수 있는 여부를 확인하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
l = [0]
ans = []
max_num = 0

for _ in range(n):
    tn = int(input())

    if max_num < tn:
        for i in range(max_num + 1, tn):
            l.append(i)
            ans.append('+')
        ans.append('+')
        ans.append('-')
        max_num = tn
    else:
        if l[-1] == tn:
            l.pop()
            ans.append('-')
        else:
            print("NO")
            exit(0)

[print(i) for i in ans]

```