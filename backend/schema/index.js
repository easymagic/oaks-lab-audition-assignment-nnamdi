const {buildSchema} = require('graphql');


const schema = buildSchema(`
   
   type Startup{
       id: ID
       logo: String!
       name: String!
       description: String!
       date_established: String!
   }

   type Query{
       fetchStartups:[Startup]
       getStartup(id: ID):Startup
       options:Test
   }


   input StartupInput{
    id: ID
    logo: String!
    name: String!
    description: String!
    date_established: String!
   }

   type Mutation{
       addStartup(data: StartupInput):Startup
   }

   type Stage{
     id: ID
     name: String!
   }

   type Step{
     id: ID
     stage_id: Int!
     name: String!
     stage: Stage
   }

   type StartupProgress{
      id: ID
      startup_id: Int!
      step_id: Int!
      step: Step
   }

   enum StartupType{
       SMALL
       LARGE
       MIDIUM
   }
   

`);


module.exports = schema;


// mutation{
//     addStartup(data: {
//      logo:"test-logo120"
//      name:"startup name30"
//      description: "startup78 description90"
//      date_established: "27-mar-2022"
//    }){
//      id
//      name
//      description
//      date_established
//     }
//    }