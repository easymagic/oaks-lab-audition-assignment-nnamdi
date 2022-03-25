const { Model } = require("./model-base/Model");

class Startup extends Model {
  static collection = [];
  constructor({ name, description, logo, date_established }) {
    super({ name, description, logo, date_established });
  }

  progress(){
      return StartupProgress.findBy('startup_id',this.id);
  }

}

class Stage extends Model {
  static collection = [];
  static position = 0;

  constructor({ name }) {
    super({ name });
    this.constructor.position += 1;
    this.position = this.constructor.position;
  }

  steps() {
    return Step.findBy("stage_id", this.id);
  }

  hasStep(stepId){
      return this.steps().filter(item=>item.id == stepId).length;
  }

  createStep({ name }) {
    Step.create({
      stage_id: this.id,
      name,
    });
  }

  previousStage() {
    let pos = this.position - 1;
    if (pos > 0) {
      return Stage.findBy("position", pos)[0];
    }
    return null;
  }

  isCompleted(startupId) {
    let steps = this.steps();
    let initialStepCount = steps.length;
    steps = steps.filter((item) => {
      return StartupProgress.exists(startupId, item.id);
    });
    return steps.length == initialStepCount;
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

class StartupProgress extends Model {
  static collection = [];  
  constructor({ startup_id, step_id, stage_id }) {
    super({ startup_id, step_id, stage_id });
  }

  static exists(startupId, step_id) {
    return this.findBy("startup_id", startupId).filter(
      (item) => item.step_id == step_id
    ).length;
  }

  static addProgress({ startup_id, step_id, stage_id }) {
    let prevStage = Stage.find(stage_id).previousStage();
    if (prevStage) {
      if (!prevStage.isCompleted(startup_id)) {
        throw "Please complete previous stage first!";
      }
    }
    let currentStage = Stage.find(stage_id);
    if (!currentStage.hasStep(step_id)){
      throw "Invalid step selection (selected step does not belong to the current stage)!";
    }
    if (this.exists(startup_id,step_id)){
       throw "Progress already added!";
    }
    return this.create({ startup_id, step_id, stage_id });
  }

  step(){
    return Step.find(this.step_id);
  }

  stage(){
      return Stage.find(this.stage_id);
  }

  startup(){
    return Startup.find(this.startup_id);
  }

}

module.exports = { Step, Stage, Startup , StartupProgress};
// console.log(Stage);
// module.exports.Stage = Stage;
