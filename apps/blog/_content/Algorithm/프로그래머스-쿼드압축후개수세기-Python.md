---
title: '프로그래머스-쿼드압축후개수세기 - Python'
date: 2021-3-12 12:21:13
category: 'Algorithm'
draft: false
---
0과 1로 이루어진 2의 n승 크기의 2차원 배열이 있다. 이 때 쿼드 트리와 같은 방식으로 압축할 때, 0과 1의 수를 반환하는 문제. 시작 y, x 좌표와 크기를 갖는 함수를 재귀적으로 사용하여 풀었다. 크기가 1일 때는 해당 좌표의 값에 따라 추가, 아닐 시 첫 번째 값과 해당 크기의 모든 요소와 비교하여 모두 같을 시 값에 따라 CBR 형식으로 값을 바꿈, 하나라도 다를 시 사이즈를 반으로 줄여 재귀적으로 탐색하여 풀었다.
```python
def solution(arr):


    def search(startY, startX, size):
        if size == 1:
            answer[arr[startY][startX]] += 1
            return

        temp_graph = []
        for y in range(startY, startY+size):
            temp_graph.append(arr[y][startX:startX+size])

        first_ele = temp_graph[0][0]
        for temp_l in temp_graph:
            for temp_ele in temp_l:
                if temp_ele != first_ele:
                    half = size // 2
                    search(startY, startX, half)
                    search(startY, startX+half, half)
                    search(startY+half, startX, half)
                    search(startY+half, startX+half, half)
                    return
        else:
            answer[first_ele] += 1
            return


    length = len(arr)
    answer = [0, 0]
    search(0, 0, length)
    return answer

```