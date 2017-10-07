/**
 * @param {number} n
 * @param {string[]} array
 * @param {number} start
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1, len = n; i <= len; i += 1) {
    let str = '';
    str += i % 3 === 0 ? 'Fizz' : '';
    str += i % 5 === 0 ? 'Buzz' : '';
    result.push(str || i.toString());
  }
  return result;
};
