---
title: '프로그래머스-여행경로 - Javascript'
date: 2022-2-17 12:21:13
category: 'Algorithm'
draft: false
---
항공권 정보가 담긴 2차원 배열을 이용해 모든 공항을 방문하면서 알파벳 순서가 앞서는 경로를 출력하는 문제. 재귀적으로 현재 위치, 남은 티켓들, 현재까지 온 경로들을 이용해 출발할 수 있는 경로들로부터 호출하여 풀었다.
```javascript
function solution(tickets) {
  const answer = [];

  function DFS(from, remainTickets, path) {
    const updatedPath = [...path, from];
    if (remainTickets.length === 0) {
      answer.push(updatedPath);
    } else {
      remainTickets.map((ticket, index) => {
        if (ticket[0] !== from) return;

        const to = ticket[1];
        const nextRemainTickets = [...remainTickets];
        nextRemainTickets.splice(index, 1);
        DFS(to, nextRemainTickets, updatedPath);
      });
    }
  }

  DFS("ICN", tickets, []);
  return answer.sort()[0];
}

```