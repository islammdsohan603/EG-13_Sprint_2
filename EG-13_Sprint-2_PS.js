// Longest Substring Without Repeating Characters

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

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));