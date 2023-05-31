const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const mongo = require('mongoose');

const GraphQLSchema = require('./schema/schema')

app.use(
    '/graphql',
    graphqlHTTP({
      schema: GraphQLSchema,
      graphiql: true,
    }),
  );

  const db = process.env.MONGO_URI
  mongo.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
          console.log('Connected Successfully To ' + db)
      })
      .catch(() => {
          console.log('An Error Occured Whiles Connecting To Database')
      })


const port = process.env.PORT || 3000;
app.listen(port);