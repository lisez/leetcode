/**
 * @see https://leetcode.com/problems/keyboard-row/description/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => words
  .filter(word => /^(?:[qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word));

console.info(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
