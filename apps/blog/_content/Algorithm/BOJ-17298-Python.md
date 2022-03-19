---
title: 'BOJ-17298 - Python'
date: 2020-08-10 12:21:13
category: 'Algorithm'
draft: false
---
위 문제의 시간초과로 인하여 스택을 이용하여 풀어 보았다. range(n-1)을 반복하며 s[i]보다 s[i+1]이 클 떄 정답 리스트인 ans_l에 [i]에 넣었다. 그렇지 못할 때 스택에 push하는데 스택에는 s[i]를 저장하는 list와 i를 저장하는 init_len 리스트를 두어 반복문 수행안에 while 스택의 길이가 0보다 크며 s[i+1]이 스택의 맨 마지막에 들어온 것보다 클 때 ans_l에 추가하여 풀었다. 다른 사람의 풀이를 보니 아직 배울 점이 많은 걸 또 깨달았다.
```python
# n = int(input())
# l = list(map(int, input().split()))
# for i in range(n):
#     for j in range(i, n):
#         if l[j] > l[i]:
#             print(l[j], end=' ')
#             break
#         elif j == n-1:
#             print(-1, end=' ')

class Stk:
    def __init__(self):
        self.list = []
        self.len = 0
        self.init_len = []
    def push(self, n, i):
        self.list.append(n)
        self.len += 1
        self.init_len.append(i)
    def top(self):
        return self.list[-1]
    def del_top(self):
        self.list.pop(-1)
        self.len -= 1
        self.init_len.pop(-1)

n = int(input())
s = list(map(int, input().split()))
ans_l = [-1] * n
stk = Stk()
for i in range(n-1):

    while stk.len > 0 and s[i+1] > stk.top():
        ans_l[stk.init_len[-1]] = s[i+1]
        stk.del_top()
    if s[i] < s[i+1]:
        ans_l[i] = s[i+1]
    else:
        stk.push(s[i], i)

print(*ans_l, end=' ')

# n=int(input())
# a=[*map(int,input().split())]
# s=[]; nge=[-1]*n
# for i in range(n):
#   while s and a[s[-1]]<a[i]:
#     nge[s.pop()]=a[i]
#   s.append(i)
# print(*nge)

```