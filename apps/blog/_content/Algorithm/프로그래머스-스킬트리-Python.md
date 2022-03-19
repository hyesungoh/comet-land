---
title: '프로그래머스-스킬트리 - Python'
date: 2021-3-1 12:21:13
category: 'Algorithm'
draft: false
---
문자열로 이루어진 스킬 순서와 문자열로 이루어진 배열인 스킬 트리가 주어진다. 스킬 순서에 없는 스킬은 상관없으며 스킬 순서와 맞는 스킬 트리가 몇개인 지 출력하는 문제. 모든 스킬 트리를 반복으로 수행하며 입력받는 스킬 순서를 deque화 하였다. 스킬 순서에 존재하는 스킬이지만 스킬 순서를 popleft한 값과 동일하지 않을 시 break를, for else를 이용하여 for문의 반복이 끝까지 수행됐을 시 정수형 변수 값을 늘렸다. 모든 반복이 종료됐을 시 반환하여 풀었다.
```python
from collections import deque

def solution(skill, skill_trees):
    skill_dict = {i: True for i in skill}
    ans = 0

    for skill_tree in skill_trees:
        temp_skill = deque(skill)

        for now_skill in skill_tree:
            if now_skill in skill_dict:
                if now_skill != temp_skill.popleft():
                    break
        else:
            ans += 1

    return ans

```