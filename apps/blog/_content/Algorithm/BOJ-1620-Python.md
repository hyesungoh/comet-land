---
title: 'BOJ-1620 - Python'
date: 2020-09-09 12:21:13
category: 'Algorithm'
draft: false
---
n, m을 입력받은 후 n개의 포켓몬 이름을 입력받는다. 그 후 m만큼 문자열을 입력했을 때, 해당 포켓몬의 번호를, 숫자를 입력했을 때, 해당 포켓몬의 이름을 출력하는 문제. 첫 풀이는 try, except를 이용하여 숫자인지 문자열인지, list.index()를 이용하여 해당 포켓몬 번호를 출력하여 풀었으나 시간초과 결과를 받게 되었고 두번째 풀이는 딕셔너리 자료형에 key를 포켓몬 이름으로, value를 포켓몬 번호로 저장하여 int(s)에서 except됐을 때 딕셔너리 자료형을 이용하여 출력하여 풀었다. 다른 사람의 풀이에서 문자열에 isdigit 함수가 있는 것을 보고 바꾼 것이 세번째 풀이이다.
```python
# pokemon_list = []
# n, m = map(int, input().split())
# for _ in range(n):
#     pokemon_list.append(input())
#
# for _ in range(m):
#     s = input()
#     try:
#         s = int(s)
#         print(pokemon_list[s-1])
#     except:
#         print(pokemon_list.index(s)+1)

import sys
input = sys.stdin.readline

pokemon_list = []
pokemon_dict = {}

n, m = map(int, input().split())
for i in range(n):
    s = input().rstrip()
    pokemon_list.append(s)
    pokemon_dict[s] = i+1

for _ in range(m):
    s = input().rstrip()
    try:
        s = int(s)
        print(pokemon_list[s-1])
    except:
        print(pokemon_dict[s])

# import sys
# input = sys.stdin.readline
#
# pokemon_list = []
# pokemon_dict = {}
#
# n, m = map(int, input().split())
# for i in range(n):
#     s = input().rstrip()
#     pokemon_list.append(s)
#     pokemon_dict[s] = i+1
#
# for _ in range(m):
#     s = input().rstrip()
#     if s.isdigit():
#         print(pokemon_list[int(s)-1])
#     else:
#         print(pokemon_dict[s])

```