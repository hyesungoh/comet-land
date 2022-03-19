---
title: '프로그래머스-단어변환 - Python'
date: 2021-3-7 12:21:13
category: 'Algorithm'
draft: false
---
두 개의 단어 begin, target과 단어의 집합 words가 있다. 한 번에 한 개의 알파벳만 바꿀 수 있으며, words에 있는 단어로만 변환할 수 있는 조건이 있을 때, 최소 몇 단계의 과정을 거쳐 begin을 traget으로 변환할 수 있는지 반환하는 문제. 모든 단어에 대해서 값을 비교하여 한개만 다른 것들을 모아 놓은 인접리스트 그래프를 만들었다. 그 후 단계를 저장하는 dist 역시 딕셔너리 자료형을 이용했으며 해당 값을 비교하여 bfs 연산을 통해 값을 반환, 초기 설정된 값과 동일하거나 딕셔너리에 존재하지 않을 시 0을 반환하여 풀었다.
```python
from collections import deque

def make_graph(graph, words, words_length, word_length):
    for word_index in range(words_length):
        for compare_word_index in range(words_length):
            if word_index == compare_word_index:
                continue

            cnt = 0
            word = words[word_index]
            compare_word = words[compare_word_index]
            for index in range(word_length):
                if word[index] != compare_word[index]:
                    cnt += 1

                if cnt > 1:
                    break
            else:
                graph[word].append(compare_word)
                graph[compare_word].append(word)

def solution(begin, target, words):
    words.append(begin)
    word_length = len(begin)
    words_length = len(words)
    graph = {i: [] for i in words}
    dist = {i: words_length + 1 for i in words}

    make_graph(graph, words, words_length, word_length)

    q = deque([begin])
    dist[begin] = 0
    while q:
        word_now = q.popleft()

        for word_next in graph[word_now]:
            if dist[word_next] < dist[word_now] + 1:
                continue

            dist[word_next] = dist[word_now] + 1
            q.append(word_next)

    if target in dist:
        return dist[target] if dist[target] != words_length + 1 else 0
    else:
        return 0

```