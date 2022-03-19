---
title: 'BOJ-1966 - Javascript'
date: 2021-4-3 12:21:13
category: 'Algorithm'
draft: false
---
우선순위가 있는 프린터 문제. 파이썬은 deque를 사용해 popleft를 사용하여 풀었지만 JS는 shift를 사용하면 되어 추가적인 import없이 풀었다.
```javascript
const input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

// const input = `3
// 1 0
// 5
// 4 2
// 1 2 3 4
// 6 0
// 1 1 9 1 1 1`.split("\n");

function solve(n, m) {
    const priorities = input[readIndex++].split(" ").map(Number);
    const printerIndex = [...Array(n).keys()];
    let printedIndex = 1;

    while (priorities.length > 0) {
        const left = priorities.shift();
        const tempIndex = printerIndex.shift();

        for (let index in priorities) {
            index = parseInt(index);

            if (priorities[index] > left) {
                priorities.push(left);
                printerIndex.push(tempIndex);
                break;
            } else if (index === priorities.length - 1) {
                if (tempIndex === m) {
                    return printedIndex;
                }
                printedIndex++;
            }
        }
    }
    return printedIndex;
}

const tc = parseInt(input[0]);
let readIndex = 1;

for (let i = 0; i < tc; i++) {
    const [n, m] = input[readIndex++].split(" ").map(Number);
    console.log(solve(n, m));
}

```