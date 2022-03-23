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
   }

   type Stage{
     id: ID
     name: String!
   }

   type Step{
     id: ID
     stage_id: Int!
     name: String!
   }

   type StartupProgress{
      id: ID
      startup_id: Int!
      step_id: Int!
   }

   enum StartupType{
       SMALL
       LARGE
       MIDIUM
   }
   

`);


module.exports = schema;