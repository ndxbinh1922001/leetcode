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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;
    let len = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    const a = len - k % len;
    let index = head, count = 1;
    while (index) {
        if (a === count) {
            tail.next = head
            head = index.next
            index.next = null
            break;
        } else {
            index = index.next;
            count++;
        }
    }
    return head;
};