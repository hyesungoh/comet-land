---
title: 'BOJ-4470 - Python'
date: 2020-08-11 12:21:13
category: 'Algorithm'
draft: false
---
n개의 문자열을 입력받고 각 입력받은 문자열 앞에 '1. ~', '2. ~', '3. ~'과 같이 줄 번호를 붙여서 출력하는 문제. for 반복문을 range(n)을 기준으로 돌며 i+1과 '. '을 input()한 것에 더 한 것을 출력하여 풀었다
```python
for i in range(int(input())):
    t = str(i+1)
    print(t + '. ' + input())

```