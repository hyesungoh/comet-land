---
title: 'CF-71A - Python'
date: 2020-11-26 12:21:13
category: 'Algorithm'
draft: false
---
문자열을 입력받은 후 길이가 10 이상일 시 첫 글자와 마지막 글자 사이에 길이를 출력하는 문제. len을 이용하여 간단히 풀었다.
```python
for _ in range(int(input())):
    s = input()
    l = len(s)
    if l > 10:
        print(s[0]+str(l-2)+s[-1])
    else:
        print(s)

```