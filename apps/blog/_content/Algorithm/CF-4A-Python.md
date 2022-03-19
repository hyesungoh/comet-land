---
title: 'CF-4A - Python'
date: 2020-11-26 12:21:13
category: 'Algorithm'
draft: false
---
코드포스에서 푼 첫 문제. 정수가 주어진 후 짝수로 나눌 수 있는 지 여부를 출력하는 문제. 문제가 영어인 탓에 입력과 출력을 보고 문제를 유출해 내는 방식으로 푸는 것 같다.
```python
n = int(input())
print("YES" if n % 2 == 0 and n != 2 else "NO")

```