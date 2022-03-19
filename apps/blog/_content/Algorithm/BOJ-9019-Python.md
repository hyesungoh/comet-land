---
title: 'BOJ-9019 - Python'
date: 2020-12-19 12:21:13
category: 'Algorithm'
draft: false
---
0000부터 9999까지의 범위에 두 수를 입력받는다. 자릿수를 왼쪽으로 이동시키는 연산은 L, 오른쪽으로 이동시키는 연산은 R, 두배로 만드는 것을 D, 1을 빼는 연산을 S라고 한다. 왼쪽에 있는 수를 오른쪽에 있는 수의 모습으로 바꾸는 최소 경우에 연산 과정을 출력하는 문제. BFS 연산을 이용하여 풀었으며 각 연산을 함수로 만들어 사용했다. 정답과 비교는 문자열로 하였으며 방문확인은 최대수까지의 배열을 만들어 비교했다. 리스트형의 인덱스를 이용해 L, R 연산을 했을 시 시간초과 결과를 얻게되어 연산하여 사용했다.
```python
import sys
from collections import deque
input = sys.stdin.readline

def left(s):
    n = int(s)
    return set_format(int(n % 1000 * 10 + n / 1000))

def right(s):
    n = int(s)
    return set_format(int(n % 10 * 1000 + n // 10))

def double(s):
    t = int(s)
    t = (t*2) % 10000
    return str(set_format(t))

def minus(s):
    if s == "0000":
        return "9999"
    t = "0000" + str(int(s)-1)
    l = len(t)
    return t[l-4:l]

def set_format(s):
    t = "0000" + str(s)
    l = len(t)
    return t[l - 4:l]

def check(s, e):
    q = deque()
    q.append([s, ""])
    visit = [False for _ in range(10001)]
    visit[int(s)] = True

    while q:
        now, cnt = q.popleft()
        if now == e:
            return cnt

        t = double(now)
        if not visit[int(t)]:
            q.append([t, cnt + "D"])
            visit[int(t)] = True

        t = minus(now)
        if not visit[int(t)]:
            q.append([t, cnt + "S"])
            visit[int(t)] = True

        t = left(now)
        if not visit[int(t)]:
            q.append([t, cnt + "L"])
            visit[int(t)] = True

        t = right(now)
        if not visit[int(t)]:
            q.append([t, cnt + "R"])
            visit[int(t)] = True

for _ in range(int(input())):
    s, e = map(set_format, input().split())
    print(check(s, e))

```