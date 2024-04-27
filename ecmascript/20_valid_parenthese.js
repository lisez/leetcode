/**
 * @see https://leetcode.com/problems/valid-parentheses/description/
 */

const parentheses = {
  ')': '(',
  '}': '{',
  ']': '[',
};

const right = Object.keys(parentheses);
const left  = right.map(el => parentheses[el]);

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
  const pool = [];

  for (const char of str) {
    if (left.indexOf(char) > -1) {
      pool.push(char);
    }

    if (right.indexOf(char) > -1) {
      const last = pool.pop();
      const pair = parentheses[char];

      if (last !== pair) {
        return false;
      }
    }
  }

  return pool.length === 0;
};
