---
title: 'BOJ-1408 - Python'
date: 2020-07-07 12:21:13
category: 'Algorithm'
draft: false
---
12:30:30과 같은 형식으로 입력되는 두 시간들의 차를 구하는 문제. 파이썬의 datetime을 이용하여 풀었으나 백준 기준으로 런타임 에러로 인해 두번째 풀이는 시간과 분을 초로 바꿔 연산하여 풀었다.
```python
# 1408
# import datetime
# t1 = datetime.datetime.strptime(input(), '%H:%M:%S')
# t2 = datetime.datetime.strptime(input(), '%H:%M:%S')
# ans = str(t2 - t1)
# print(ans.split()[2])

def hms2s(l):
    return l[0]*3600+l[1]*60+l[2]
e, s = hms2s(list(map(int, input().split(':')))), hms2s(list(map(int, input().split(':'))))
t = s-e if s-e>=0 else 86400+s-e
print('{:02d}:{:02d}:{:02d}'.format(t//3600, t%3600//60, t%60))ß

```