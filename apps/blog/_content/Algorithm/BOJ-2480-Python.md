---
title: 'BOJ-2480 - Python'
date: 2020-08-23 12:21:13
category: 'Algorithm'
draft: false
---
공백으로 나누어진 3개의 수를 입력받은 후, 같은 수가 3개일 때 10000 + (같은 수) _ 1000, 같은 수가 2개일 때 1000 + (같은 수) _ 100, 같은 수가 없을 때는 (제일 높은 수) \* 100 한 값을 출력하는 문제. 내 풀이는 리스트의 count 메소드를 사용하여 a, b 각 count하여 변수 n과 num에 같은 수가 몇 개인지, 그 수는 무엇인지 저장을 하여 if문으로 나누어 따로 출력하는 부분을 만들었다. 상당히 비효율 적으로 풀었다 생각하여 다른 사람의 풀이를 본 결과 sorted 함수를 사용하여 간단히 풀 수 있는 걸 배우게 되었다.
```python
a, b, c = map(int, input().split())
count_a = [a, b, c].count(a)
count_b = [a, b, c].count(b)

if count_a == 1 and count_b == 1:
    n = 0
    num = max(a, b, c)
elif count_a >= count_b:
    n = count_a
    num = a
else:
    n = count_b
    num = b


if n == 3:
    print(10000 + num * 1000)
elif n == 2:
    print(1000 + num * 100)
else:
    print(num * 100)


# a, b, c = sorted(map(int, input().split()))
# if a == c:
#     print(10000 + a * 1000)
# elif a == b or b == c:
#     print(1000 + b * 100)
# else:
#     print(c * 100)

```