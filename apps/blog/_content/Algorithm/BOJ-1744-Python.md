---
title: 'BOJ-1744 - Python'
date: 2021-2-8 12:21:13
category: 'Algorithm'
draft: false
---
n개의 수가 입력될 때, 그 수열의 합을 구하려고 한다. 하지만 그 수열의 합을 모두 더해서 구하는 것이 아니라, 수열의 두 수를 묶으려고 한다. 어떤 수를 묶을 때 위치와 상관없이 묶을 수 있으며 묶은 두 수는 서로 곱한 후에 더한다. 수열의 모든 수는 단 한번만 묶거나, 묶지 않아야할 때 그 합의 최대치를 출력하는 문제. 입력되는 수들을 1 이상의 정수들과 0과 음수들을 저장하는 두 배열에 나눠 저장한다. 정수들은 내림차순으로 정렬하여 큰 수들 먼저 두개씩 묶어 곱한 값을 더하며 이 때 두 수 중 1이 있을 때는 더하는 연산을 하여 저장하였다. 0과 정수들은 내림차순으로 정렬하여 작은 수들을 먼저 묶어 주어 연산된 값을 출력하여 풀었다.
```python
import sys
input = sys.stdin.readline

n = int(input())
positive = []
negative = []
for i in range(n):
    t = int(input())
    positive.append(t) if t > 0 else negative.append(t)

positive.sort(reverse=True)
negative.sort()
lp = len(positive)
ln = len(negative)

ans = 0
for i in range(0, lp, 2):
    t = positive[i] if i+1 >= lp else positive[i] + positive[i+1] if positive[i] == 1 or positive[i+1] == 1 else positive[i] * positive[i+1]
    ans += t

for i in range(0, ln, 2):
    ans += negative[i] if i+1 >= ln else negative[i] * negative[i+1]

print(ans)

```