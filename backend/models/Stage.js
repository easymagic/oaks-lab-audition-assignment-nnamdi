const { Model } = require("../models/Model");
const  {Step}  = require("./Step");

class Stage extends Model {
  static collection = [];

  constructor({ name }) {
    super({ name });
  }

  steps() {
    return Step.findBy("stage_id", this.id);
  }

  createStep({ name }) {
    Step.create({
      stage_id: this.id,
      name,
    });
  }
}

// console.log(Stage);

module.exports = {Stage};
