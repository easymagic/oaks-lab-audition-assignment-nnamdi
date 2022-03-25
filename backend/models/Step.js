const { Model } = require("../models/Model");




class Step extends Model {
    static collection = [];
  constructor({ name, stage_id }) {
    super({ name, stage_id });
  }

  stage() {
      console.log(this.stage_id,'sid');
      console.log('-sfd-',Stage,'sfd');
    return Stage.find(this.stage_id);
  }
}

module.exports = {Step};

// const {Stage} = require("./Stage");

// console.log(Stage,'-stage.');
