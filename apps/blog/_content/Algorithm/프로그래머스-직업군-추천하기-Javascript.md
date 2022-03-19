---
title: '프로그래머스-직업군-추천하기 - Javascript'
date: 2021-8-28 12:21:13
category: 'Algorithm'
draft: false
---
각 직업군 언어 점수, 개발자가 사용하는 언어와 언어 선호도가 주어질 때, 그에 맞는 직업군을 추천해주는 문제. 문자열로 주어지는 각 직업군 언어 점수를 오브젝트로 Parsing한 후, 각 언어에 대해 점수를 계산, 저장하였다. 저장하는 과정에서 최댓값을 저장하여 배열에 저장하였다. 동일한 값은 알파벳순으로 빠른 값을 반환하는 조건이 있어 정렬한 값 중에서 0번 째 인덱스 값을 반환하여 풀었다. 각 직업군 언어에서 개발자가 사용하는 언어가 없을 때는 0으로 계산하는 조건이 있어 `Nullish coalescing`을 사용하였으나 프로그래머스 상에서 호환이 안되어 삼항연산자로 대체하여 풀었다.
```javascript
function parsingTable(table) {
    const parsedObj = {};
    const jobObj = {};

    table.forEach((row) => {
        const arrRow = row.split(" ");
        const job = arrRow.shift();
        jobObj[job] = 0;
        parsedObj[job] = {};
        arrRow.forEach((item, index) => {
            parsedObj[job][item] = 5 - index;
        });
    });

    return { parsedObj, jobObj };
}

function solution(table, languages, preference) {
    const { parsedObj, jobObj } = parsingTable(table);
    let jobList = [];
    let maxValue = 0;

    Object.keys(jobObj).map((job) => {
        languages.map((language, index) => {
            // const jobLangRank = parsedObj[job][language] ?? 0;
            const jobLangRank = parsedObj[job][language]
                ? parsedObj[job][language]
                : 0;
            const langPreference = preference[index];
            jobObj[job] += jobLangRank * langPreference;
        });

        if (jobObj[job] > maxValue) {
            maxValue = jobObj[job];
            jobList = [job];
        } else if (jobObj[job] === maxValue) jobList.push(job);
    });

    return jobList.sort()[0];
}

```