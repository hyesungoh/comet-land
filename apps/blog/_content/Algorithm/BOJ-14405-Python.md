---
title: 'BOJ-14405 - Python'
date: 2020-08-14 12:21:13
category: 'Algorithm'
draft: false
---
문자열이 입력되고 'pi', 'ka', 'chu'를 제외한 다른 단어가 있을 때 NO, 세 단어로만 이루어져 있을 때 YES를 출력하는 문제. 첫 풀이 때 replace('pi', '')와 같이 단어를 공백으로 바꿔주었는데 'kpia'와 같은 문자열에서 pi가 없어져 'ka'가 있다고 판단하기 때문에 replace를 '/'로 하였고 최대 문자열의 길이인 '/'\*5000과 in 연산자로 비교하여 '/'가 아닌 다른 문자가 있을 때 NO를 출력하게 풀었다. 다른 풀이는 replace를 ' '으로 하여 strip 함수를 이용하여 푸는 것이다
```python
s = input()
s = s.replace('pi', '/')
s = s.replace('ka', '/')
s = s.replace('chu', '/')
print('YES' if s in '/'*5000 else 'NO')

# print('NO' if input().replace('pi', ' ').replace('ka', ' ').replace('chu', ' ').strip() else 'YES')

```