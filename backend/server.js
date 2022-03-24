const express = require("express");
const resolvers = require("./resolvers");
const schema = require("./schema");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
// const {} = require('@graphql-tools/utils');

const root = resolvers;
const PORT = 9090;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({ typeDefs: schema, resolvers: root }),
    // rootValue:root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: `App running on port ${PORT}!`,
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
