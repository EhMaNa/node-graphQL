const RootQuery = require('./query');
const { GraphQLSchema } = require('graphql');






  module.exports = new GraphQLSchema({
    query: RootQuery
  });