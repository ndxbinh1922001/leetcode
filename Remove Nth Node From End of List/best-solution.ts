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
    let ahead = head
    let behind = null // prev to the deleted one

    for (let i = 1; i <= n; i++) {
        ahead = ahead.next
    }

    while (ahead) {
        ahead = ahead.next
        if (!behind) {
            behind = head
        } else {
            behind = behind.next
        }
    }

    if (behind === null) return head.next

    behind.next = behind?.next?.next ?? null
    return head
};