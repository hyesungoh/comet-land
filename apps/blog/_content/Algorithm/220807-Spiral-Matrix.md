---
title: '[LeetCode] Spiral Matrix'
subtitle: 'Array and String'
date: 2022-08-07 00:00:00
category: 'Algorithm'
---

## Description

Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)

```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `100 <= matrix[i][j] <= 100`

<br/>

## Submission

```jsx
var spiralOrder = function (matrix) {
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  const size = matrix.length * matrix[0].length;
  const result = [];

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
};
```

left, right, top, bottom 위치를 정해놓고 result 빈 배열에 넣으면서 result 배열이 전체 숫자 개수의 크기를 넘기면 안되므로 result 배열의 길이를 size보다 작게 한다.

각 위치에서 left는 right 보다 작거나 같을때 까지, top은 bottom보다 작거나 같을때까지 for문을 계속 반복한다.

문제를 직관적으로 푸는 방법이다. 다른 방법이 생각 나지 않을때 문제 요구 사항을 그대로 따라하는 코드도 짜보도록 고려해보아야겠다.
