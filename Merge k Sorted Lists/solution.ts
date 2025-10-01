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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const merge2Lists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
        const dummy = new ListNode(0);
        let tail = dummy;
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = l1 ?? l2;
        return dummy.next;
    };
    if (lists.length === 0) return null
    const merge = (start: number, end: number) => {
        if (start === end) return lists[start];
        const mid = Math.floor((start + end) / 2)
        const left = merge(start, mid)
        const right = merge(mid + 1, end)
        return merge2Lists(left, right)
    }
    return merge(0, lists.length - 1)
};