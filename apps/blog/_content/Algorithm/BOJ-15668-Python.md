---
title: 'BOJ-15668 - Python'
date: 2020-07-05 12:21:13
category: 'Algorithm'
draft: false
---
숫자 n을 입력받고 n = n1 + n2 방식으로 표현할 때 n1과 n2에서 0~9까지 겹치는 수가 없는 경우를 출력하는 문제. 파이썬의 i "in" word와 같이 사용하는 메소드를 사용하여 풀었다. 첫 풀이에서 큰 수는 생각하지 못한체 반복문의 범위를 n//2+1으로 설정하여 시간초과가 나왔지만 range(1, min(100000, n))으로 바꾸었더니 정상적으로 정답을 맞을 수 있었다. 추가적으로 exit() 함수를 배웠다. 앞으로 유용하게 사용할 것 같다.
```python
n = int(input())
for i in range(1, min(100000, n)):
    s = str(i) + str(n-i); l = list(); ans = 1
    for w in s:
        if w in l:
            ans = 0; break
        l.append(w)
    if ans:
        print(n - i, "+", i)
        exit(0)
print(-1)

```