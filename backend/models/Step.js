const { Model } = require("../models/Model");
const { Stage } = require("./Stage");

class Step extends Model {
  constructor({ name, stage_id }) {
    super({ name, stage_id });
  }

  stage() {
    return Stage.find(this.stage_id);
  }
}

module.exports = { Step };
