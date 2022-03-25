const { nanoid } = require("nanoid");

class Model {
  static collection = [];

  constructor(data) {
    for (let key in data) {
      this[key] = data[key];
    }
    this.id = nanoid();
  }

  static all(){
      return Model.collection;
  }

  static create(data) {
    return new this(data);
  }

  static append(data){
    Model.collection.push(data);
  }

  static find(id) {
    return Model.collection.find((item) => item.id == id);
  }

  static findIndex() {
    let index = -1;
    Model.collection.filter((item, key) => {
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
    let index = Model.findIndex(this.id);
    Model.collection[index] = this;
    return this;
  }

  remove() {
    Model.collection = Model.collection.filter((item) => item.id != this.id);
  }

  static factory(cb) {
    cb(this);
  }
}

module.exports = { Model };
