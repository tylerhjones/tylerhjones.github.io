# Least Recently Used (LRU) Cache

This LRU implementation is based on a double linked list. The list is used to keep track of the order in which the items are used. The list is ordered from most recently used to least recently used. The head of the list is the most recently used item, and the tail of the list is the least recently used item. It does not consider the size of the cached value when determining which item to evict.

```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
        this.tail = Node()
        this.head = Node()

        class Node {
            constructor(key, value) {
                this.key = key
                this.value = value
                this.next = null
                this.prev = null
            }
        }

        this.get = function (key) {
            if (this.cache.has(key)) {
                let node = this.cache.get(key)
                this._moveToHead(key)
                return node.value
            }
            return undefined
        }
        this._add = function (node) {
            node.prev = this.head
            node.next = this.head.next
            this.head.next.prev = node
            this.head.next = node
        }
        this._remove = function (node) {
            node.prev.next = node.next
            node.next.prev = node.prev
        }
        this._moveToHead = function (node) {
            this._remove(node)
            this._add(node)
        }
        this.put = function (key, value) {
            if (this.cache.has(key)) {
                let node = this.cache.get(key)
                node.value = value
                this._moveToHead(node)
            }
            var node = new Node(key, value)
            this.cache.put(key, node)
            this._add(node)

            // cleanup
            if (this.cache.size > this.capacity) {
                let node = this.tail.prev
                this.cache.delete(node.key)
                this._remove(node)
            }
        }
    }
}
```