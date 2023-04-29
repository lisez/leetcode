/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode|null} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} ln1}
 * @param {ListNode} ln2}
 * @param {ListNode|null} result}
 */
function compute(ln1, ln2, result = null) {}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  return compute(l1, l2);
};
