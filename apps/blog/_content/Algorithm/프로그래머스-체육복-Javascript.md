---
title: '프로그래머스-체육복 - Javascript'
date: 2021-9-10 12:21:13
category: 'Algorithm'
draft: false
---
n명의 학생, 체육복을 잃어버린 학생들의 번호 lost, 여분의 체육복을 가진 학생들의 번호 reserve가 주어지며 자신의 앞뒤 번호에게만 체육복을 빌려줄 수 있을 때, 가장 많은 학생들이 체육복을 입을 때의 학생 수를 반환하는 문제. 배열에 학생별 체육복의 수를 저장한 뒤, 2개의 체육복을 가진 학생일 때 앞, 뒤 순서로 빌려주어 풀었다. 간단한 그리디 문제.
```javascript
function solution(n, lost, reserve) {
    const cloths = Array(n + 1).fill(1);
    lost.map((i) => (cloths[i] -= 1));
    reserve.map((i) => (cloths[i] += 1));

    for (let i = 1; i < n + 1; i++) {
        if (cloths[i] !== 2) continue;
        if (cloths[i - 1] === 0) {
            cloths[i] -= 1;
            cloths[i - 1] += 1;
            continue;
        }
        if (cloths[i + 1] === 0) {
            cloths[i] -= 1;
            cloths[i + 1] += 1;
        }
    }

    return cloths.slice(1).filter((i) => i > 0).length;
}

```