---
title: 'BOJ-1092 - Python'
date: 2021-3-19 12:21:13
category: 'Algorithm'
draft: false
---
항구에 각 옮길 수 있는 최대 무게가 있는 N개의 크레인, 각 무게가 있는 M개의 화물이 있다. 이 때 최소 시간으로 모든 박스를 옮겼을 때의 시간을 출력하는 문제. 첫 번째 풀이는 크레인 중 제일 작은 값과 리스트를 슬라이싱하여 비교하였으나, 작은 것부터 계산할 시에 3 6 8, 1 2 3 4 5 6 7 8 9와 같은 반례에 통과하지 못하였다. 두 번째 풀이는 옮길 수 있는 화물 중 제일 무거운 것부터 del 메소드를 이용하여 풀었다. 간단하지만 생각보다 긴 시간을 소비하였다.
```python
# n = int(input())
# cranes = sorted(map(int, input().split()))
# min_crane = min(cranes)
# m = int(input())
# boxes = sorted(map(int, input().split()))
#
# cnt, answer = 0, 0
#
# while True:
#     if cnt >= m: break
#
#     length = cnt+n if cnt+n < m else m if cnt == m-1 else -1
#     now_boxes = boxes[cnt:length]
#     max_box = now_boxes[-1]
#
#     if min_crane >= max_box:
#         cnt += n
#
#     else:
#         for crane in cranes:
#             # print(crane, boxes[cnt])
#             if cnt >= m: break
#
#             if crane >= boxes[cnt]:
#                 cnt += 1
#                 continue
#             if crane == cranes[-1] and crane < boxes[cnt]:
#                 print(-1)
#                 exit(0)
#
#     answer += 1
#
# print(answer)

n = int(input())
cranes = sorted(map(int, input().split()), reverse=True)
m = int(input())
boxes = sorted(map(int, input().split()), reverse=True)

if cranes[0] < boxes[0]:
    print(-1)
    exit(0)

answer = 0
while m > 0:
    answer += 1
    for crane in cranes:
        for i in range(m):
            if crane >= boxes[i]:
                del boxes[i]
                m -= 1
                break

print(answer)

```