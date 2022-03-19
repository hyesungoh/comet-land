---
title: 'BOJ-1541 - Python'
date: 2020-12-30 12:21:13
category: 'Algorithm'
draft: false
---
정수, '+', '-'로만 이루어진 수식을 입력받은 후, 해당 수식에 괄호를 사용하여 연산한 값이 최소가 되도록 출력하는 문제. '-'로 split한 값들을 eval하여 다른 배열에 append한 후, 해당 배열을 '-'.join하여 eval한 값을 출력하여 풀었다. 주어지는 정수가 '05' 같은 경우가 있어 map을 이용하여 int로 바꾼 후 다시 str형으로 바꿔 join하도록 풀었다.
```python
s = input()
ans = []
for i in s.split('-'):
    ans.append(str(eval("+".join(list(map(str, map(int, i.split('+'))))))))

d = "-".join(ans)
print(eval(d))

```