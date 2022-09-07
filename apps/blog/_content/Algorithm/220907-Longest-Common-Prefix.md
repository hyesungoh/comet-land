---
title: '[LeetCode] Longest Common Prefix'
subtitle: 'Array and String'
date: 2022-09-07 00:00:00
category: 'Algorithm'
---

## Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"

```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

<br/>

## Submission

```jsx
var longestCommonPrefix = function (strs) {
  let answer = '';
  if (strs.length < 1) {
    return answer;
  }
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const check = first[i];

    for (let j = 1; j < strs.length; j++) {
      if (check !== strs[j][i]) {
        return answer;
      }
    }
    answer += check;
  }
  return answer;
};
```

Runtime: **81 ms**

Memory Usage: **42.4 MB**

공통된 문자열을 찾아내는 문제이다. 첫 문자를 기준으로 한 글자씩 다음 요소와 글자와 비교해 겹치는 것만 찾아낸다.

<br/>

## Other’s Solution

```jsx
var longestCommonPrefix = function (strs) {
  let key = strs[0];

  for (let word of strs) {
    let goodChars = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === key[i]) {
        goodChars += word[i];
      } else {
        break;
      }
    }
    key = goodChars;
  }

  return key;
};
```

Runtime: 60 **ms**

원리는 같으나 prefix가 같지 않을때 break를 걸어서 불필요하게 for문을 반복하는 코드를 줄여서 runtime을 줄였기 때문에 확실히 간단해진 것 같다.
