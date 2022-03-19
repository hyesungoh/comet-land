---
title: 'BOJ-5397 - Javascript'
date: 2021-3-30 12:21:13
category: 'Algorithm'
draft: false
---
n개의 문자열이 주어진다. 모든 문자열에 대해서 "<", ">"가 입력될 시 커서를 움직이며, "-"가 입력될 시 커서에 해당하는 문자를 지우는 연산을 할 때, 문자열이 완성된 모습을 출력하는 문제. 첫 번째 풀이는 정수형 변수 index와 `splice`를 이용하여 stack에 값을 추가, 삭제하여 풀었으나 시간초과 결과를 받았다. 두 번째 풀이는 스택 배열을 두개 사용하여 커서 이동 시 pop과 push를 이용, 연산 종료 후 오른쪽 스택을 뒤집어서 `join`하여 풀었다.
```javascript
const input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");

// const input = `2
// ---abc--
// ab---cde<<<<ab`.split("\n");

// function edit(string) {
//     const stack = [];
//     let index = 0;

//     for (word of string) {
//         if (word === "<") {
//             if (index > 0) {
//                 index -= 1;
//             }
//         } else if (word === ">") {
//             if (index < stack.length) {
//                 index += 1;
//             }
//         } else if (word === "-") {
//             if (stack.length !== 0) {
//                 stack.splice(index - 1, 1);
//                 index -= 1;
//             }
//         } else {
//             stack.splice(index, 0, word);
//             index += 1;
//         }
//     }

//     return stack.join("");
// }


function edit(string) {
    const leftStack = [];
    const rightStack = [];

    for (word of string) {
        if (word === "<") {
            if (leftStack.length > 0) rightStack.push(leftStack.pop());
        } else if (word === ">") {
            if (rightStack.length > 0) leftStack.push(rightStack.pop());
        } else if (word === "-") {
            if (leftStack.length > 0) leftStack.pop();
        } else {
            leftStack.push(word);
        }
    }
    return leftStack.join("") + rightStack.reverse().join("");
}

const n = parseInt(input[0]);

for (let i = 1; i < n + 1; i++) {
    console.log(edit(input[i]));
}

```