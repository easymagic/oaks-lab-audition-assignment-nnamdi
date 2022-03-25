const { Model } = require("../models/Model");

class Stage extends Model {
  constructor({ name }) {
    super({ name });
  }
}

module.exports = { Stage };
