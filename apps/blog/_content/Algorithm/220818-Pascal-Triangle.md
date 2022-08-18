---
title: '[LeetCode] Pascal Triangle'
subtitle: 'Array and String'
date: 2022-08-18 00:00:00
category: 'Algorithm'
---

## Description

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

**Example 1:**

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

```

**Example 2:**

```
Input: numRows = 1
Output: [[1]]

```

**Constraints:**

- `1 <= numRows <= 30`

<br/>

## Submission

```jsx
var generate = function (numRows) {
  const array = new Array(numRows).fill(null).map(() => []);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      array[i].push(null);
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i][0] = 1;
    array[i][array[i].length - 1] = 1;
  }

  for (let i = 2; i < array.length; i++) {
    for (let j = 1; j <= i - 1; j++) {
      array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
    }
  }
  return array;
};
```

Runtime: **82 ms**

Memory Usage: **41.8 MB**

<br/>

### 문제 풀이

Array 함수를 통해서 배열을 만든 후 각 배열 안에 원소들을 map을 통해서 배열로 바꾼다.

배열의 0번째 원소와 끝 원소는 1이기 때문에 나머지 원소들은 null로 채운다.

배열의 0번째 원소, 끝 원소를 1로 채운다.

이중 포문을 돌면서 array 배열의 이전의 두 원소의 합을 더한다.

<br/>

### 다른 사람의 풀이

```jsx
var generate = function (numRows) {
  const array = new Array(numRows);

  for (let i = 0; i < array.length; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; i < row.length; j++) {
      let rowAbove = array[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    array[i] = row;
  }

  return array;
};
```

원리는 똑같지만 한 for문 안에서 실행해서 코드가 더 갅단해졌고 불필요한 for문이 없어져서 런타임도 줄어들게 되었다.
