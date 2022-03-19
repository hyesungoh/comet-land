---
title: 'BOJ-1806 - Python'
date: 2021-4-16 12:21:13
category: 'Algorithm'
draft: false
---
길이가 N인 수열이 주어진다. 수열에서 연속된 부분합 중 그 합이 S 이상이 되는 것 중, 가장 짧은 길이를 출력하는 문제. 최대 길이를 INF로 저장한 후, 왼쪽과 오른쪽 인덱스 값을 이용하여 부분합을 계산, 비교하여 인덱스 값을 조정하는 두 포인터 방법을 이용하였다. 최소 길이가 반복문이 종료 시에도 INF일 시, 모두 더하여도 S 이상이 되지 않은 것이여서 0을 출력, 아닐 시 해당 값을 출력하여 풀었다. 자세한 풀이는 주석 참조
```python

INF = 100001
N, S = map(int, input().split())
L = list(map(int, input().split()))

left, right, tsum = 0, 0, 0
min_length = INF

while True:
    if tsum >= S: # 합이 구하고자하는 값보다 같거나 클 때
        min_length = min(min_length, right-left) # 최소 길이를 갱신
        tsum -= L[left]
        left += 1 # 왼쪽 값을 제외하고 탐색

    elif right == N: break # 오른쪽 끝까지 탐색시에 종료

    else: # 합이 구하고자 하는 값보다 작으며, 오른쪽 끝까지 탐색을 하지 않았을 시
        tsum += L[right]
        right += 1 # 오른쪽 값을 추가하고 범위를 넓혀 탐색

if min_length == INF: print(0) # 최대 길이와 같음 > 구하고자 하는 값보다 큰 수를 만들 수 없는 것
else: print(min_length)
```