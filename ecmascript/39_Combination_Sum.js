
const getComponents = (candidates, target, members) => {
  const result = members || [];
  const pool   = candidates.filter(el => el <= target);

  let number = target;
  for (let i = 0, len = pool.length; i < len; i += 1) {
    const el   = pool[i];
    const rest = getComponents(pool, number - el, result);

    if (rest.length > 0 || number - el === 0) {
      number -= el;
      result.push(el);
      break;
    }
  }

  return result;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const pool = candidates.sort((a, b) => a - b).filter(el => el < target);

  const solution = getComponents(pool, target);
};
