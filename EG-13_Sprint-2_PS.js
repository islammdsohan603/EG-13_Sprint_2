

//Count Vowels

function countVowels(str) {

  let count = 0;
  const vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }
  return count
}

console.log(countVowels("javascript"))