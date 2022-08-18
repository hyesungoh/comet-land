---
title: '[LeetCode] Add Binary'
subtitle: 'Array and String'
date: 2022-08-18 00:00:00
category: 'Algorithm'
---

## Description

Given two binary strings `a` and `b`, return *their sum as a binary string*.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"

```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"

```

**Constraints:**

- `1 <= a.length, b.length <= 104`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

<br/>

## Submission

```jsx
var addBinary = function (a, b) {
  let sum = '';
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let A = a[i] ? a[i] : '0';
    let B = b[j] ? b[j] : '0';

    console.log(sum, 'sum');

    sum = String(A ^ B ^ carry) + sum;

    if (A === B && A !== String(carry)) {
      carry = Number(!carry);
    }
    i--;
    j--;
  }

  if (carry) {
    sum = String(carry) + sum;
  }

  return sum;
};

console.log(addBinary((a = '11'), (b = '1')));
```

Runtime: **104 ms**

Memory Usage: **42.8 MB**

### 문제 풀이

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb18b884-d8ae-4d93-92f6-05f7bdc058b2/Untitled.png)

문자열 맨 뒤에 값부터 비교해야하므로 각각 문자열의 마지막 문자부터 while문을 돌면서 하나씩 비교를 한다.

XOR을 했을때 같으면 0, 다르면 1이 되는데 sum은 XOR 값으로 구할수 있다. 뒤에서 부터 값을 구하는 것이기에 sum을 뒤에다가 붙여준다.

carry가 변하는 구간만 carry 값을 flip하는 조건을 추가한다.

carry가 1이면 carry를 sum에 추가한다.
