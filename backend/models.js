const { Model } = require("./model-base/Model");

class Startup extends Model {
  static collection = [];
  constructor({ name, description, logo, date_established }) {
    super({ name, description, logo, date_established });
  }
}

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

class Step extends Model {
  static collection = [];
  constructor({ name, stage_id }) {
    super({ name, stage_id });
  }

  stage() {
    return Stage.find(this.stage_id);
  }
}

class StartupProgress extends Model{
  
    constructor(){
        super();
    }

    

}



module.exports = { Step, Stage, Startup };
// console.log(Stage);
// module.exports.Stage = Stage;
