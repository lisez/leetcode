/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = word => /^(?:[A-Z][a-z]+|[a-z]+|[A-Z]+)$/.test(word);
