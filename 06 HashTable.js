class HashTable {
    constructor(size = 7) {
      this.dataMap = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      }
      return hash;
    }
    
    // O(1)
    set(key, value) {
      const index = this._hash(key);
      if (!this.dataMap[index]) this.dataMap[index] = [];
  
      this.dataMap[index].push([key, value]);
      return this;
    }
    
    // For Average Case can suppose as Θ(1)
    get(key) {
      let index = this._hash(key);
      if (this.dataMap[index]) {
        for (let i = 0; i < this.dataMap[index].length; i++) {
          if (this.dataMap[index][i][0] === key) {
            return this.dataMap[index][i][1];
          }
        }
      } else return undefined;
    }
  
    keys() {
      const allKeys = [];
      for (let i = 0; i < this.dataMap.length; i++) {
        if (this.dataMap[i]) {
          for (let j = 0; j < this.dataMap[i].length; j++) {
            allKeys.push(this.dataMap[i][j][0]);
          }
        }
      }
      return allKeys;
    }
  }
  
  let myHashTable = new HashTable();
  myHashTable.set('lumber', 70);
  myHashTable.set('washers', 50);
  myHashTable.set('bolts', 1400);
  console.log(myHashTable);
  