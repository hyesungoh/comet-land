---
title: 'BOJ-10546 - Javascript'
date: 2021-3-30 12:21:13
category: 'Algorithm'
draft: false
---
프로그래머스 완주하지 못한 선수와 같은 문제. 오브젝트 자료형을 이용하여 참가한 선수의 이름을 기준으로 정수형 값으로 저장한 후, 완주한 사람에 대해서 -1 하였다. 그 후 모든 오브젝트 요소에 대해서 값이 1인 요소를 출력하여 풀었다.
```javascript
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// const input = `4
// mislav
// stanko
// mislav
// ana
// stanko
// ana
// mislav`.split("\n");

const solve = (participant) => {
    for (temp in participant) {
        if (participant[temp] == 1) {
            return temp;
        }
    }
};

const n = parseInt(input[0]);
const participant = {};

for (let i = 1; i < 1 + n; i++) {
    let temp_people = input[i];
    if (temp_people in participant) {
        participant[temp_people] += 1;
    } else {
        participant[temp_people] = 1;
    }
}

for (let i = 1 + n; i < 1 + n + n - 1; i++) {
    let finished = input[i];
    participant[finished] -= 1;
}

console.log(solve(participant));
```