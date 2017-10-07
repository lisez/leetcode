/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  const stack  = [];
  const cancel = () => stack.pop() * -1;
  const double = () => {
    stack.push(stack[stack.length - 1] * 2);
    return stack[stack.length - 1];
  };
  const plus = () => {
    const score = stack.length <= 2
      ? stack.reduce((amount, curr) => amount + curr, 0)
      : stack[stack.length - 1] + stack[stack.length - 2];
    stack.push(score);
    return score;
  };
  const cmd = {
    D:   double,
    C:   cancel,
    '+': plus,
  };
  return ops.reduce((amount, curr) => {
    if (cmd[curr] === undefined) {
      stack.push(Number(curr));
      return amount + Number(curr);
    }
    return amount + cmd[curr]();
  }, 0);
};

console.info(calPoints(['5', '2', 'C', 'D', '+']));
console.info(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
