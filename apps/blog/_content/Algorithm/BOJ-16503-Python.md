---
title: 'BOJ-16503 - Python'
date: 2020-07-09 12:21:13
category: 'Algorithm'
draft: false
---
1 + 2 _ 3와 같은 형태로 연산자 + - _ /, 4가지와 1 이상의 수 3가지를 입력받는다. 계산 순서에 따라 달라지는 두 값중에 작은 순으로 출력하는 문제. 하지만 나눗셈 연산중에 피연산자 중 하나가 음수이면 양수로 바꿔 계산한 값에 음숫값을 취한다. 첫 풀이는 입력받은 값을 list형으로 변환하여 괄호를 넣어 eval을 이용하여 풀었으나 피연산자가 음수인 나눗셈 연산일 경우를 위해 새롭게 풀기로 하였다. 두번째 풀이는 리스트 슬라이싱을 통해 먼저 계산을 하고 입력되는 숫자는 모두 양수인 것을 이용하여 먼저 계산한 값과 연사자만을 확인하여 연산해주었다. 다른 사람 풀이는 5개의 수, 연산자만 입력되는 것을 이용하여 eval을 이용하여 간단히 푼 것을 볼 수 있는데, 연산 과정에서 나눗셈 연산을 위와 같이하는 줄 모른 내 잘못이 컸다.
```python
# s = input().split()
# s = ['//' if i == '/' else i for i in s]
# s.insert(0, '('); s.insert(4, ')')
# x = eval(''.join(s))
# s.remove('('); s.remove(')')
# s.insert(2, '('); s.insert(6, ')')
# y = eval(''.join(s))
#
# print(min(x, y))
# print(max(x, y))

s = ['//' if i == '/' else i for i in input().split()]

x = eval(''.join(s[0:3]))
if s[3] == '//' and x < 0:
    x = -(eval(str(abs(x)) + ''.join(s[3:5])))
else:
    x = eval(str(x) + ''.join(s[3:5]))

y = eval(''.join(s[2:5]))
if s[1] == '//' and y < 0:
    y = -(eval(''.join(s[0:2]) + str(abs(y))))
else:
    y = eval(''.join(s[0:2]) + str(y))

print(min(x, y))
print(max(x, y))

# a,b,c,d,e=input().split()
# f=int(eval(str(int(eval(a+b+c)))+d+e))
# s=int(eval(a+b+str(int(eval(c+d+e)))))
# print(min(f,s))
# print(max(f,s))

```