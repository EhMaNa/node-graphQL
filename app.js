const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');

const GraphQLSchema = require('./schema/schema')

app.use(
    '/graphql',
    graphqlHTTP({
      schema: GraphQLSchema,
      graphiql: true,
    }),
  );
const port = process.env.PORT || 3000;
app.listen(port);