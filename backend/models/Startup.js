const { Model } = require("../models/Model");

class Startup extends Model {
  static collection = [];
  constructor({ name, description, logo, date_established }) {
    super({ name, description, logo, date_established });
  }
}

module.exports = { Startup };
