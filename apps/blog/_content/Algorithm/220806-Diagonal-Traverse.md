---
title: '[LeetCode] Diagonal Traverse'
subtitle: 'Array and String'
date: 2022-08-06 00:00:00
category: 'Algorithm'
---

## Description

Given an `m x n` matrix `mat`, return *an array of all the elements of the array in a diagonal order*.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg](https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg)

```
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

```

**Example 2:**

```
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]

```

**Constraints:**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 104`
- `1 <= m * n <= 104`
- `105 <= mat[i][j] <= 105`

<br/>

## Submission

```jsx
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  const result = new Array(rows + cols - 1).fill(null).map(() => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        result[i + j].unshift(matrix[i][j]);
        console.log(result);
      } else {
        result[i + j].push(matrix[i][j]);
      }
    }
  }

  return result.flat();
};
```

**Submission Detail**

| 32 / 32 test cases passed. | Status: Accepted |
| -------------------------- | ---------------- |

| Runtime: 153 ms
Memory Usage: 49 MB | Submitted: 0 minutes ago |

행과 열의 합이 핵심이다. 행과 열의 합이 짝수이면 위에서 부터 내려가고 홀수 이면 아래에서부터 올라오면서 숫자가 시작이된다. 이중배열을 만들어서 선언을 한 다음 키값이 짝수일때는 앞에서 부터 배열에 넣고 홀수 일때 뒤에다가 배열에 추가해주면 된다.
