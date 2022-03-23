const express = require('express');
const resolvers = require('./resolvers');
const schema = require('./schema');
const app = express();
const {graphqlHTTP } = require('express-graphql');

const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));


// app.use('/graphql');
app.get('/',(req,res)=>{
    res.json({
        message:'App running on port 9000!'
    });
});

app.listen(9090,()=>console.log('App running on port 9000'));