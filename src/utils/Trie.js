export class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  getSuggestions(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return [];
      node = node.children[ch];
    }
    const results = [];
    this.collect(node, prefix, results);
    return results;
  }

  collect(node, prefix, results) {
    if (node.isEnd) results.push(prefix);
    for (const [ch, child] of Object.entries(node.children)) {
      this.collect(child, prefix + ch, results);
    }
  }

  // 🆕 Get the best-matching full word for partial input
  getClosestWord(prefix) {
    const suggestions = this.getSuggestions(prefix);
    return suggestions.length > 0 ? suggestions[0] : null;
  }
}
