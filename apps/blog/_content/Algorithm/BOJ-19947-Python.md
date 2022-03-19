---
title: 'BOJ-19947 - Python'
date: 2021-1-13 12:21:13
category: 'Algorithm'
draft: false
---
h원과 투자기간 y가 주어진 후, 5% 1년, 20% 3년, 35% 5년의 이윤과 기간이 있는 투자 상품이 있다. 매번 이율은 소수점 이하를 버림해서 받으며 투자 방식은 매년 바꿀 수 있을 때, 가장 많은 이득을 얻었을 때의 총 자산을 소수점을 모두 버리고 정수로 출력하는 문제. 첫 풀이는 함수를 재귀적으로 사용하여 전역 변수와 값을 비교하여 풀었다. 두번째 풀이는 전역변수 사용이 아닌 재귀함수의 반환 값을 이용하여 비교, 출력하여 풀었다.
```python
# 19947
def investment(money, year):
    global ans
    if year == 0:
        ans = max(ans, money)
        return

    if year - 1 >= 0:
        interest = int(money * 1.05)
        investment(interest, year - 1)
    if year - 3 >= 0:
        interest = int(money * 1.2)
        investment(interest, year - 3)
    if year - 5 >= 0:
        interest = int(money * 1.35)
        investment(interest, year - 5)

h, y = map(int, input().split())
ans = 0
investment(h, y)
print(ans)


# def invest(money, year):
#     ans = money
#     if year >= 1:
#         ans = max(ans, invest(int(money * 1.05), year-1))
#     if year >= 3:
#         ans = max(ans, invest(int(money * 1.2), year-3))
#     if year >= 5:
#         ans = max(ans, invest(int(money * 1.35), year-5))
#     return ans
#
# h, y = map(int, input().split())
# print(invest(h, y))


# def e(h, y):
#     m=h
#     if y>=1: m=max(m,e(int(h*1.05),y-1))
#     if y>=3: m=max(m,e(int(h*1.2),y-3))
#     if y>=5: m=max(m,e(int(h*1.35),y-5))
#     return m
# h, y = map(int, input().split())
# print(e(h,y))

```