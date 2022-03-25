const { nanoid } = require("nanoid");

class Model {
  // static collection = {};

  constructor(data) {
    for (let key in data) {
      this[key] = data[key];
    }
    this.id = nanoid();
  }

  static initCollection(tag){
    // if (!.collection[tag])Model.collection[tag]=[];
    this.collection = [];
  }

  static all(){
      // this.initCollection(tag); 
      return this.collection;
  }

  static findBy(k,v){
      return this.collection.filter(item=>item[k] == v);
  }

  static create(data) {
    let obj = new this(data);
    this.append(obj);
    return obj;
  }

  static append(data){
    this.collection.push(data);
    // console.log(this.collection);
  }

  static find(id) {
    return this.collection.find((item) => item.id == id);
  }

  static findIndex() {
    let index = -1;
    this.collection.filter((item, key) => {
      let check = item.id == id;
      if (check) {
        index = key;
      }
      return check;
    });
    return index;
  }

  update(data) {
    for (let key in data) {
      this[key] = data[key];
    }
    let index = this.findIndex(this.id);
    this.collection[index] = this;
    return this;
  }

  remove() {
    this.collection = this.collection.filter((item) => item.id != this.id);
  }

  static factory(cb) {
    cb(this);
  }
}

module.exports = { Model };
