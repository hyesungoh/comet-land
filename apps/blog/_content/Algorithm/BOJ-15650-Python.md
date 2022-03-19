---
title: 'BOJ-15650 - Python'
date: 2020-10-14 12:21:13
category: 'Algorithm'
draft: false
---
자연수 n, m이 입력될 때 1부터 n까지 자연수 중에서 중복 없이 m개를 고른 수열, 고른 수열은 오름차순. 위 두개의 조건을 만족하는 수열들을 출력하는 문제. 두가지 풀이 모두 m과 비교를 하여 출력과 return으로 함수의 종료를 작성하였다. 첫번째 풀이는 한 개의 매개변수를 사용하여 풀었으며 반복문 안에서 i보다 큰 수들의 방문 확인 배열 값들을 바꿔주는 2중 반복문을 사용하였다. 두번째 풀이는 크기와 현재 인덱스 값을 저장할 매개변수 두 개를 사용하였다. 인덱스값부터 n까지 반복문을 실행하고 방문하지 않은 값일 때 방문 확인, 배열에 추가 후 현재 반복중인 i를 이용하여 재귀적으로 호출하였다. 그 후 다음 반복을 위해 현재 i값만 방문 확인 값을 바꿔주었다.
```python
n, m = map(int, input().split())
l = list(range(1, n+1))
visit = [False] * n
ans = []

# def bt(index):
#     if index == m: # 크기가 같을 떄
#         print(*ans)
#         return
#
#     for i in range(n): # 입력받은 수-1 까지 반복
#         if visit[i]: # 이미 사용한 수일 때 넘어감
#             continue
#
#         ans.append(l[i]) # 배열에 해당 값 추가
#         visit[i] = True # 방문 확인 배열에 값 수정
#         bt(index+1) # 크기를 늘려 재귀적 호출
#         ans.pop() # 다음 반복을 위해 배열의 마지막 값 제거
#
#         for j in range(i+1, n): # 현재 수보다 큰 수들을 전부 미방문 처리
#             visit[j] = False
# bt(0)

def bt(depth, index):
    if depth == m: # 크기와 같을 떄 출력하고 함수 종료
        print(*ans)
        return

    for i in range(index, n): # 이미 들어간 값이 있다면 해당 값보다 큰 것만 반복
        if not visit[i]: # 방문하지 않았던 것일 때
            ans.append(l[i])
            visit[i] = True
            bt(depth+1, i+1) # 현재 반복중인 i를 index로
            visit[i] = False
            ans.pop() # 재귀적으로 호출할 때를 위해 맨 뒤에 append한 값을 삭제
bt(0, 0)

```