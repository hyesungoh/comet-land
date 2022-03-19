---
title: 'BOJ-5639 - Python'
date: 2020-12-2 12:21:13
category: 'Algorithm'
draft: false
---
노드의 데이터보다 작은 노드를 왼쪽에, 큰 노드를 오른쪽에 배치한 이진 검색 트리를 전위 순회한 결과룰 입력받은 후, 후위 순회한 결과를 출력하는 문제. 입력의 끝이 정해져 있지 않음으로 stdin.readlines를 이용하여 입력을 받았으며 클래스를 이용하여 노드, 이전검색트리를 만들어 이진 검색트리에 위치시킨 후 후위순회를 하여 결과를 출력하여 풀었으나 시간초과 결과를 받게 되었다. 그 후 [해당](https://developmentdiary.tistory.com/442) 게시물을 참고하여 리스트의 인덱스를 이용하여 후위순회하는 방법을 참고하여 풀었다.
```python
# import sys
# sys.setrecursionlimit(10**9)
#
# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.left = self.right = None
#
#     def __str__(self):
#         return str(self.data)
#
# class Binary:
#     def __init__(self):
#         self.root = None
#
#     def insert(self, data):
#         self.root = self.insert_req(self.root, data)
#
#     def insert_req(self, node, data):
#         if node == None:
#             node = Node(data)
#         else:
#             if node.data < data:
#                 node.right = self.insert_req(node.right, data)
#             else:
#                 node.left = self.insert_req(node.left, data)
#         return node
#
#     def postorder(self, node):
#         if node != None:
#             self.postorder(node.left)
#             self.postorder(node.right)
#             print(node)
#
#
# l = list(map(int, sys.stdin.readlines()))
# b = Binary()
# for i in l:
#     b.insert(i)
# b.postorder(b.root)

import sys
sys.setrecursionlimit(10**9)

def postorder(start, end):
    if start > end:
        return

    division = end + 1  # 나눌위치
    for i in range(start + 1, end + 1):
        if l[start] < l[i]:
            division = i
            break

    postorder(start + 1, division - 1)  # 분할 왼쪽
    postorder(division, end)  # 분할 오른쪽
    print(l[start])

l = list(map(int, sys.stdin.readlines()))
postorder(0,len(l)-1)

```