---
title: 'BOJ-17293 - Python'
date: 2020-08-12 12:21:13
category: 'Algorithm'
draft: false
---
n을 입력받은 후 n ~ 0까지 이어지는 노래 가사를 출력하는데 가사의 첫 줄은 n bottles, n이 1일 때는 bottle, 0일 때는 no more bottles로 나누어 출력해야 한다. 두번째 줄은 n-1 bottles, n-1이 1일 때는 bottle, i-1이 0일 때는 no more bottles로 출력해야 한다. 추가적으로 마지막 문장은 다르며 n bottles 혹은 bottle을 출력해야한다. 첫 풀이는 단순 if문과 삼항연산자를 이용하여 풀었으며 두번째 풀이는 함수를 이용하여 풀었으나 백준 풀이상에서는 틀렸다고 나오는 데 이유를 아직 못찾았다.
```python
n = int(input())
for i in range(n, -1, -1):
    if i >= 2:
        w1 = str(i) + ' bottles'
        w2 = str(i-1) + ' bottles' if i-1 > 1 else '1 bottle'
    elif i == 1:
        w1 = '1 bottle'
        w2 = 'no more bottles'
    else:
        w1 = 'no more bottles'
        w2 = str(n) + ' bottles' if n > 1 else '1 bottle'

print(w1 + ' of beer on the wall, ' + w1 + ' of beer.' if w1 != 'no more bottles' else
      'No more bottles of beer on the wall, no more bottles of beer.')
print('Take one down and pass it around, ' + w2 + ' of beer on the wall.' if w1 != 'no more bottles' else
      'Go to the store and buy some more, ' + w2 + ' of beer on the wall.')
print('')

# def n(x):
#     if x == 0:
#         return 'no more bottles'
#     return '1 bottle' if x == 1 else str(x)+' bottles'
#
# j = int(input())
# for i in range(j, 0, -1):
#     print(n(i) + ' of beer on the wall, ' + n(i) + ' of beer.')
#     print('Take one down and pass it around, ' + n(i-1) + ' of beer on the wall.')
#     print('')
# print("No more bottles of beer on the wall, no more bottles of beer.")
# print("Go to the store and buy some more, " + n(j) + " on the wall.")

```