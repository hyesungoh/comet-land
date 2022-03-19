---
title: 'BOJ-15719 - Python'
date: 2020-07-02 12:21:13
category: 'Algorithm'
draft: false
---
n과 1 ~ n-1까지 이루어진 수열을 입력받는 다. 수열에는 중복된 수가 한 개 존재하며, 그 것이 문제의 정답이다. 첫 풀이는 단순히 수열을 기준으로 반복문을 수행하고 dictionary에 key에 수열의 수를 넣어 이미 존재하는 수일 때 break하여 그 수를 출력하는 것으로 풀이를 하였으나 백준 체점 기준으로 메모리 초과 결과가 나와 검색해보니 sys.stdin.read()를 사용해야한다 ... 해서 사용해봤으나 EOF를 따로 입력해야하는 read() 특성상 마음대로 구현이 되지 않아 이 부분은 다른 분 풀이를 참고하여 read() 함수를 구현했다.read()를 참고하며 본 방법인데 중복된 문자는 1개, 1 ~ n-1까지의 수로 이루어진 수열이라는 특징을 이용해 **1 ~ n-1의 총 합(n\*(n-1)//2)에서 수열에 존재하는 모든 수를 뺀 값에 -를 붙이면**+ 정답이 나오게 된다.. 역시 배울 게 남아도 너무 많이 남았다고 생각한다.
```python
# d = dict(); input()
# for i in input().split():
#     if i not in d.keys():
#         d[i] = 1
#     else:
#         print(i)
#         break

from sys import stdin
def read():
    while 1:
        s = stdin.read(100000)
        if not s: return
        while s[-1] != ' ':
            extra = stdin.read(1)
            if not extra: break
            s+= extra
        yield from map(int, s.split())

n = int(input())
ans = n * (n-1) // 2 - sum(read())
print(-ans)

```