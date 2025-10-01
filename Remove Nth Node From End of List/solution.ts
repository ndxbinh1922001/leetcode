/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let index = head, len = 0;
    while (index) {
        len++;
        index = index.next;
    }
    let count = 0;
    index = head;
    while (index) {
        if (len === n) {
            head = head.next;
            break;
        } else if (count === len - n - 1) {
            index.next = index.next.next;
            break;
        } else {
            index = index.next;
            count++;
        }
    }
    return head
};