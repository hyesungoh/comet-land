---
title: '프로그래머스-124나라의숫자 - Python'
date: 2021-2-22 12:21:13
category: 'Algorithm'
draft: false
---
정수 n을 124만을 이용하여 표현하는 문제. 문자열 124의 인덱스를 이용하여 배열에 추가하는 방식을 이용하였으며, 해당 숫자는 n-1한 값의 3으로 나눈 나머지를 할당하여 풀었다. 쉬운 문제였으나 다소 시행착오를 겪었다. 낮은 난이도도 자주 풀어봐야겠다.
```python
def solution(n):
    s = "124"
    dp = [s[(n-1) % 3]]

    while n > 3:
        n = (n-1) // 3
        dp.append(s[(n-1)%3])

    return "".join(reversed(dp))

```