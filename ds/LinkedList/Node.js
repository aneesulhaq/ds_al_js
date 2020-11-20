function LLNode(data) {
    this.next = null;
    this.data = data;
    this.previous = null;
    return this;
}

module.exports = LLNode;