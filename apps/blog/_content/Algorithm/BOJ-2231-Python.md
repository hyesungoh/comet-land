---
title: 'BOJ-2231 - Python'
date: 2020-07-29 12:21:13
category: 'Algorithm'
draft: false
---
245의 분해합은 (245+2+4+5)하여 256이며 245는 256의 생성자일 때, n을 입력받고 그 수의 생성자를 출력하며 생성자가 없는 수일 때는 0을, 여러 개일 때는 제일 작은 수를 출력하는 문제. 브루트포스 방식을 이용하여 n까지 for문을 수행하며 수를 문자열 타입으로 바꾼 후 sum 함수를 이용한 후 비교해 주었다. 제일 작은 생성자만 출력하면 되기 때문에 출력 후 exit() 해주었으며 반복문이 끝났을 때 0을 출력 해 주었다.
```python
n = int(input())
for i in range(n):
    t = sum(map(int,str(i)))
    if i + t == n:
        print(i)
        exit(0)
print(0)

```