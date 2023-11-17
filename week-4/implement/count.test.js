// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
/*
const str = "the sum of all numbers in a function are a lot";
const charToCount = "a";
const occurrences = countChar(str, charToCount);
console.log(`Occurrences of "${charToCount}" in "${str}" : ${occurrences}`);
*/

test("Count occurrences of a given character in a givin string", () => {
  expect(countChar("the sum of all numbers in a function are a lot", "a")).toBe(
    4
  );

  expect(countChar("Code Your Future", "z")).toBe(0);
});
