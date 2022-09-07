---
title: '[LeetCode] Reverse String'
subtitle: 'Array and String'
date: 2022-09-07 00:00:00
category: 'Algorithm'
---

## Description

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

**Example 1:**

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

```

**Example 2:**

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

```

**Constraints:**

- `1 <= s.length <= 105`
- `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

<br/>

## Submission

```jsx
var reverseString = function (s) {
  let p = 0;
  let q = s.length - 1;
  while (p <= q) {
    let temp = s[q];
    s[q] = s[p];
    s[p] = temp;
    p++;
    q--;
  }
};
```

Runtime: **121 ms**

Memory Usage: **49.2 MB**

배열을 역순으로 출력하는 문제였다. `reverse` 메소드를 사용해서 간단하게 풀 수 있었으나 투포인터 알고리즘을 사용하여 풀었다.

배열의 첫번째와 마지막 두개의 포인터로 첫번째 포인터는 더하고 마지막 포인터는 빼면서 두 포인터가 같거나 작을때까지 바꿔준다.
