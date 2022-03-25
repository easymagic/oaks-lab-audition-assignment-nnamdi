const { Model } = require("./model-base/Model");

class Startup extends Model {
  static collection = [];
  constructor({ name, description, logo, date_established }) {
    super({ name, description, logo, date_established });
  }
}

class Stage extends Model {
  static collection = [];
  static position = 0;

  constructor({ name }) {
    super({ name });
    this.constructor.position+=1;
    this.position = this.constructor.position;
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

  previousStage(){
      let pos = this.position - 1;
      if (pos > 0){
         return Stage.findBy('position',pos)[0];
      }
      return null;
  }

  isCompleted(startupId){
   let steps = this.steps();
   let initialStepCount = steps.length;
   steps = steps.filter(item=>{
     return StartupProgress.exists(startupId,item.id);
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

class StartupProgress extends Model{
  
    constructor({startup_id,step_id,stage_id}){
        super({startup_id,step_id,stage_id});
    }

    static exists(startupId,step_id){
      return this.findBy('startup_id',startupId).filter(item=>item.step_id == step_id).length;
    }

    static addProgress({startup_id,step_id,stage_id}){
        let prevStage = Stage.find(stage_id).previousStage();
        if (prevStage){
           if (!prevStage.isCompleted(startup_id)){
              throw {
                message:'Please complete previous stage first!',
                error:true
              };
           } 
        }
        return this.create({startup_id,step_id,stage_id});
    }

}



module.exports = { Step, Stage, Startup };
// console.log(Stage);
// module.exports.Stage = Stage;
