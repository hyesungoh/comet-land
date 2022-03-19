---
title: '프로그래머스-모의고사 - Javascript'
date: 2021-8-24 12:21:13
category: 'Algorithm'
draft: false
---
최대 10,000개의 문제의 정답들로 이루어진 배열이 주어진다. 1번, 2번, 3번 사람이 일정 규칙을 갖고 문제를 풀 때, 제일 많이 맞춘 사람의 번호를 배열에 담아 반환하는 문제. 규칙을 배열에 담아둔 후, 문제의 인덱스 값과 비교한 나머지를 이용하여 맞았는 지 판별, 맞은 횟수를 저장하였다. 맞은 횟수 중 제일 큰 수와 비교하여 맞은 사람들을 배열에 담아 반환하여 풀었다.자바스크립트를 이용해 완벽탐색 문제는 처음인 것 같은데, forEach, map, reduce, filter와 같은 메소드가 참 좋은 것 같다.
```javascript
function solution(answers) {
    const peopleAnswerList = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const peopleAnswerNum = [0, 0, 0];

    answers.map((answer, index) => {
        for (let i = 0; i < peopleAnswerList.length; i++) {
            const currentCompareIndex = index % peopleAnswerList[i].length;
            peopleAnswerNum[i] +=
                answer === peopleAnswerList[i][currentCompareIndex] ? 1 : 0;
        }
    });

    const maxNum = Math.max(...peopleAnswerNum);
    const answer = [];

    peopleAnswerNum.forEach((num, index) => {
        if (num === maxNum) answer.push(index + 1);
    });
    return answer;
}

```