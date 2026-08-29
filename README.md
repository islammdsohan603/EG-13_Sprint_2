# 🧠 JavaScript Problem Solving

A beginner-friendly collection of **JavaScript problem-solving challenges** designed to improve programming logic, problem-solving skills, and preparation for coding interviews.

This repository contains problems from **basic to intermediate level**, with simple explanations and JavaScript solutions.

---

## 🎯 Why This Repository?

I created this repository to practice JavaScript regularly and improve my problem-solving skills.

The main goals are:

* 🧠 Improve logical thinking
* 💻 Practice JavaScript fundamentals
* 🔍 Learn common programming patterns
* 🚀 Prepare for coding interviews
* 📚 Help beginners understand problem-solving step by step

---

## 📚 Problems List

| #  | Problem                                        | Difficulty | Main Concept        |
| -- | ---------------------------------------------- | ---------- | ------------------- |
| 01 | Reverse a String                               | 🟢 Easy    | String              |
| 02 | Find Maximum                                   | 🟢 Easy    | Array & Loop        |
| 03 | Check for Palindrome                           | 🟢 Easy    | String              |
| 04 | Sum Array Elements                             | 🟢 Easy    | Array & Loop        |
| 05 | Count Vowels                                   | 🟢 Easy    | String & Loop       |
| 06 | Two Sum                                        | 🟡 Medium  | Nested Loop         |
| 07 | Flatten a Nested Array                         | 🟡 Medium  | Recursion           |
| 08 | Group Anagrams                                 | 🟡 Medium  | Map & Sorting       |
| 09 | Longest Substring Without Repeating Characters | 🟡 Medium  | Sliding Window      |
| 10 | Deep Clone an Object                           | 🟡 Medium  | Recursion & Objects |

---

# 🟢 Beginner Problems

## 01. Reverse a String

### 📌 Problem

Write a function that accepts a string and returns the string with its characters reversed.

### Example

```text
Input:  "hello"
Output: "olleh"
```

### 💡 Concept

* String
* `split()`
* `reverse()`
* `join()`

### Solution

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// Output: "olleh"
```

---

## 02. Find Maximum

### 📌 Problem

Find the largest number from an array of numbers.

### Example

```text
Input:  [3, 7, 2, 9, 5]
Output: 9
```

### 💡 Concept

* Array
* `for` loop
* Comparison

### Solution

```javascript
function findMax(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 5]));
// Output: 9
```

### ⏱️ Complexity

```text
Time:  O(n)
Space: O(1)
```

---

## 03. Check for Palindrome

### 📌 Problem

Check whether a string reads the same forward and backward.

### Example

```text
Input:  "racecar"
Output: true
```

```text
Input:  "hello"
Output: false
```

### 💡 Concept

* String
* `split()`
* `reverse()`
* Comparison

### Solution

```javascript
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("racecar"));
// Output: true
```

---

## 04. Sum Array Elements

### 📌 Problem

Calculate the total sum of all numbers in an array.

### Example

```text
Input:  [10, 20, 30, 40]
Output: 100
```

### 💡 Concept

* Array
* `for` loop
* Accumulator

### Solution

```javascript
function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

console.log(sumArray([10, 20, 30, 40]));
// Output: 100
```

### ⏱️ Complexity

```text
Time:  O(n)
Space: O(1)
```

---

## 05. Count Vowels

### 📌 Problem

Count how many vowels (`a, e, i, o, u`) are present in a string.

### Example

```text
Input:  "javascript"
Output: 3
```

### 💡 Concept

* String
* Loop
* `includes()`

### Solution

```javascript
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));
// Output: 3
```

---

# 🟡 Intermediate Problems

## 06. Two Sum

### 📌 Problem

Find two numbers in an array whose sum equals the target and return their indexes.

### Example

```text
Input:  [2, 7, 11, 15], target = 9
Output: [0, 1]
```

Because:

```text
2 + 7 = 9
```

And:

```text
2 → index 0
7 → index 1
```

### 💡 Concept

* Nested loops
* Array indexes
* Comparison

### Solution

```javascript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }

    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]
```

### ⏱️ Complexity

```text
Time:  O(n²)
Space: O(1)
```

---

## 07. Flatten a Nested Array

### 📌 Problem

Convert a deeply nested array into a single-level array.

### Example

```text
Input:
[1, [2, [3, 4], 5]]

Output:
[1, 2, 3, 4, 5]
```

### 💡 Concept

* Recursion
* `Array.isArray()`
* `push()`
* Spread operator

### Solution

```javascript
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {
      result.push(...flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }

  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5]]));
// Output: [1, 2, 3, 4, 5]
```

### 🧠 How Recursion Works

```text
[1, [2, [3, 4], 5]]
        ↓
[2, [3, 4], 5]
        ↓
[3, 4]
        ↓
3, 4
```

The function keeps calling itself until it finds normal values.

---

## 08. Group Anagrams

### 📌 Problem

Group words that contain the same characters.

### Example

```text
Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

### 💡 Concept

* `Map`
* String sorting
* `split()`
* `sort()`
* `join()`

### Solution

```javascript
function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {

    const key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}

console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
```

### 🧠 How It Works

Anagrams produce the same sorted string:

```text
eat → aet
tea → aet
ate → aet

tan → ant
nat → ant

bat → abt
```

So the `Map` becomes:

```text
aet → ["eat", "tea", "ate"]
ant → ["tan", "nat"]
abt → ["bat"]
```

---

## 09. Longest Substring Without Repeating Characters

### 📌 Problem

Find the length of the longest substring that contains no repeated characters.

### Example

```text
Input:  "abcabcbb"
Output: 3
```

The longest substring is:

```text
"abc"
```

### 💡 Concept

* Sliding Window
* `Set`
* Two pointers
* `while` loop

### Solution

```javascript
function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {

    while (seen.has(s[i])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[i]);

    maxLength = Math.max(
      maxLength,
      i - left + 1
    );
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: 3
```

### 🧠 Sliding Window

```text
abcabcbb
^^^

abc → length 3
```

When a duplicate character appears, move the `left` pointer forward until the duplicate is removed.

### ⏱️ Complexity

```text
Time:  O(n)
Space: O(n)
```

---

## 10. Deep Clone an Object

### 📌 Problem

Create a completely independent copy of a nested object.

### Example

```javascript
Input:
{
  a: 1,
  b: {
    c: 2
  }
}

Output:
{
  a: 1,
  b: {
    c: 2
  }
}
```

The important part is that nested objects should have **different references**.

### 💡 Concept

* Objects
* Recursion
* `typeof`
* Object properties

### Solution

```javascript
function deepClone(obj) {
  const clone = {};

  for (let key in obj) {

    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }

  }

  return clone;
}

console.log(
  deepClone({
    a: 1,
    b: {
      c: 2
    }
  })
);
```

### 🧪 Reference Check

```javascript
const original = {
  a: 1,
  b: {
    c: 2
  }
};

const cloned = deepClone(original);

console.log(cloned === original);
// false

console.log(cloned.b === original.b);
// false
```

This means the nested object also has a different reference.

---

# 🧩 Concepts I Have Practiced

Through these problems, I am practicing:

* Variables
* Functions
* Arrays
* Strings
* Loops
* Conditions
* `Set`
* `Map`
* Recursion
* Nested loops
* Two pointers
* Sliding Window
* Object manipulation
* Array methods
* Time & Space Complexity

---

# 📈 Progress

* [x] Reverse a String
* [x] Find Maximum
* [x] Check for Palindrome
* [x] Sum Array Elements
* [x] Count Vowels
* [x] Two Sum
* [x] Flatten a Nested Array
* [ ] Group Anagrams
* [ ] Longest Substring Without Repeating Characters
* [ ] Deep Clone an Object

---

# 🚀 What's Next?

I will continue adding more JavaScript problems and gradually move from **basic → intermediate → advanced** challenges.

Upcoming topics may include:

* Binary Search
* Merge Two Sorted Arrays
* Find Duplicates
* Valid Parentheses
* Fibonacci
* Factorial
* GCD & LCM
* Frequency Counter
* Debounce
* Throttle
* Promise-based problems
* Async/Await
* Recursion challenges
* Sorting algorithms
* Searching algorithms
* Data Structures

---

# 🤝 For Beginners

If you are also learning JavaScript, try to solve each problem **yourself first** before looking at the solution.

A good practice approach is:

```text
1. Understand the problem
        ↓
2. Write your own approach
        ↓
3. Code the solution
        ↓
4. Test with different inputs
        ↓
5. Check the solution
        ↓
6. Understand Time & Space Complexity
```

> 💡 Don't focus only on getting the correct answer. Focus on understanding **why the solution works**.

---

# 👨‍💻 Author

**Sohan Islam**

Junior Full Stack Web Developer

Focused on learning JavaScript, React, Next.js, Node.js and improving problem-solving skills.

---

⭐ If this repository helps you, feel free to give it a star!
