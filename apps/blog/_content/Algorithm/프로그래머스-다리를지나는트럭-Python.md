---
title: '프로그래머스-다리를지나는트럭 - Python'
date: 2021-3-4 12:21:13
category: 'Algorithm'
draft: false
---
다리의 길이, 다리가 버틸 수 있는 무게, 트럭들의 무게가 주어진다. 트럭은 1초에 1만큼 움직일 때 몇 초가 지나야 모든 트럭이 다리를 지날 수 있는 지 출력하는 문제. 첫 번째 풀이는 다리의 길이만큼 0으로 이루어진 배열을 만든 후, 트럭들을 popleft한 값 - 다리의 마지막 값 + 현재 다리에 있는 총 값을 다리의 하중과 비교하여 추가적으로 트럭이 다리에 진입할 수 있을 때 appendleft를 이용하여 추가, 아닐 시 appendleft를 0으로 추가 후 마지막 값을 뺀 후, 마지막 값이 0이 아닐 시 다리를 지나간 트럭의 수를 계산하는 변수를 이용하여 비교하여 풀었다. 추가적으로 연산을 줄이기 위해 sum 함수가 아닌 현재 다리에 있는 총 값을 저장하는 변수를 만들어 사용하여 풀었다. 두 번째 풀이는 다른 사람의 풀이를 각색하여 풀었다. 다리의 길이 만큼 배열을 만든 후, 다리의 길이가 존재할 때까지 반복문을 수행한다. 가장 왼쪽에 있는 값을 뺀 후, 넘어가야하는 트럭이 존재할 때, 무게를 비교하여 다리에 값을 추가하여 풀었다. 마찬가지로 무게를 비교할 때 sum 함수가 아닌 변수를 선언하여 관리하였다.
```python


from collections import deque

def solution(bridge_length, weight, truck_weights):
    truck_weights = deque(truck_weights)
    length = len(truck_weights)
    exit_length = 0

    bridge_now = deque([0 for _ in range(bridge_length)])
    bridge_weight = 0
    answer = 0

    while exit_length != length:
        if truck_weights:
            truck_now = truck_weights.popleft()
        last_truck = bridge_now[-1]

        if bridge_weight + truck_now - last_truck <= weight:
            bridge_now.appendleft(truck_now)
            bridge_weight += truck_now
        else:
            bridge_now.appendleft(0)
            truck_weights.appendleft(truck_now)

        bridge_now.pop()
        bridge_weight -= last_truck
        exit_length += 1 if last_truck != 0 else 0
        answer += 1

    return answer


# def solution(bride_length, weight, truck_weights):
#     answer = 0
#     truck_weights = deque(truck_weights)
#     bridge_now = deque([0 for _ in range(bride_length)])
#     bridge_total = 0
#
#     while bridge_now:
#         answer += 1
#         bridge_total -= bridge_now.popleft()
#
#         if truck_weights:
#             if bridge_total + truck_weights[0] <= weight:
#                 t = truck_weights.popleft()
#                 bridge_now.append(t)
#                 bridge_total += t
#             else:
#                 bridge_now.append(0)
#
#     return answer

```