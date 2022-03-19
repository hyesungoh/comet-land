---
title: 'BOJ-6549 - Python'
date: 2021-1-5 12:21:13
category: 'Algorithm'
draft: false
---
직사각형 여러 개가 아래쪽으로 정렬되어 있는 도형을 히스토그램이라 칭한다. 히스토그램의 길이, 각 직사각형들의 높이를 입력받은 후 해당 히스토그램에서 가장 큰 직사각형의 넓이를 출력하는 문제. 스택을 활용하여 풀었으며 입력되는 것을 1번 인덱스부터 끝까지 자른 배열을 함수에 전달한 후 첫 연산과 마지막 사각형을 확인하기 위해 맨 앞, 뒤에 0을 추가하였다. 그 후 확인했던 사각형의 인덱스가 들어갈 배열, 정답을 위한 변수를 생성하였다. 1부터 마지막 사각형을 위해 n+1까지 반복문을 수행하였으며 현재 확인 중인 사각형보다 이전 사각형의 높이가 클 시, 확인한 사각형의 인덱스의 마지막 값을 pop하였다. 해당 값 x 현재 시점 사이에 사각형의 수와 정답을 위한 변수 중 큰 것을 재저장하여 반복문이 끝날 시 반환하여 풀었다. 자세한 풀이는 주석을 참고
```python
import sys
input = sys.stdin.readline

def checkArea(n, l):
    # 첫 연산과 마지막 사각형 확인을 위해 맨 앞과 뒤에 0 추가
    l.insert(0, 0)
    l.append(0)

    # 확인헀던 사각형의 인덱스가 들어갈 배열
    checked = [0]
    # 정담이 반환될 정수형 변수
    area = 0

    for i in range(1, n + 2):
        # l[i]는 현재 확인 중인 사각형의 높이
        # l[checked[-1]은 이전에 확인했던 최대 높이
        # checked에 값이 존재하며 현재 높이보다 이전 높이가 클 시
        while checked and (l[i] < l[checked[-1]]):
            # 비교할 사각형의 인덱스
            current_index = checked.pop()
            # i - 1 - checked[-1]은 현재 시점 사이에 몇 개의 사각형이 있는 지, 즉 가로 길이
            area = max(area, (i - 1 - checked[-1]) * l[current_index])
        checked.append(i)

    return area


while True:
    l = list(map(int, input().split()))
    n = l[0]
    if n == 0:
        break
    print(checkArea(n, l[1:]))

```