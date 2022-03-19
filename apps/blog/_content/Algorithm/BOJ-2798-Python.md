---
title: 'BOJ-2798 - Python'
date: 2021-1-21 12:21:13
category: 'Algorithm'
draft: false
---
기존 3중 반복문을 이용하여 단순 최대 값을 출력하는 방법이 아닌, 입력되는 수들을 내림차순으로 정렬 후에 m보다 같거나 클 시 set 자료형에 추가하고 break한다. 그 후에 제일 큰 값을 출력하여 풀었다. 이 방법은 set 자료형을 이용하여 중복되는 수들의 연산을 제거, 오름차순으로 정렬 후 break를 통해 추가한 수보다 작은 수들을 비교하지 않는 방법으로 연산의 수를 줄였다.
```python
# n, m = map(int, input().split())
# l = list(map(int, input().split()))
# ans = 0
# for i in range(n-2):
#     for j in range(i+1, n-1):
#         for k in range(j+1, n):
#             if l[i] + l[j] + l[k] <= m:
#                 ans = max(ans, l[i] + l[j] + l[k])
# print(ans)

n, m = map(int, input().split())
l = sorted(map(int, input().split()), reverse=True)

s = set()
for i in range(n-2):
    for j in range(i+1, n-1):
        for k in range(j+1, n):
            t = l[i] + l[j] + l[k]
            if t <= m:
                s.add(t)
                break
print(max(s))

```