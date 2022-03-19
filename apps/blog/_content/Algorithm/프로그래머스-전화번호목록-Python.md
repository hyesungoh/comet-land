---
title: '프로그래머스-전화번호목록 - Python'
date: 2021-3-4 12:21:13
category: 'Algorithm'
draft: false
---
문자열로 이루어진 배열이 주어진다. 한 번호가 다른 번호의 접두어인 경우 False를, 없을 시 True를 반환하는 문제. 첫 번째 접근은 startswith 메소드를 이용하여 풀려 했으나, 어떤 반례인 지 틀리는 경우가 존재하였다. 두 번째 풀이는 딕셔너리 자료형을 이용하여 저장 후 모든 문자열에 대해서 빈 문자열에 한 단어 씩 추가, 해당 문자열을 딕셔너리 자료형에 있는 지 비교하여 풀었다.
```python
def solution(phone_book):
    hash = {i: True for i in phone_book}

    for word in phone_book:
        temp = ""
        for text in word:
            temp += text
            if temp in hash and word != temp:
                return False
    return True

```