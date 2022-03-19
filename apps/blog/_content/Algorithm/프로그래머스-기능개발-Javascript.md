---
title: '프로그래머스-기능개발 - Javascript'
date: 2021-11-10 12:21:13
category: 'Algorithm'
draft: false
---
배열의 첫 번째 기능이 완성되는 것을 기준으로 날짜 값을 증감 후, 조건이 달성될 시 shift를 이용하여 계속 첫 번째 값과 증감된 날짜를 기준으로 풀었다.
```javascript
function getFinished(p, s, days){
    let finished = 0;
    while (p[0] + s[0] * days >= 100) {
        finished += 1;
        p.shift();
        s.shift();
    }
    return finished;
}

function solution(progresses, speeds) {
    const answer = [];
    let days = 1;

    while (progresses.length !== 0) {
        const tempFinished = getFinished(progresses, speeds, days);
        if (tempFinished > 0) answer.push(tempFinished);
        days += 1;
    }
    return answer;
}
```