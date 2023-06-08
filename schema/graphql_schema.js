const {projects, client, clients }= require('./user');
const {Hero, Company} = require('./schema/mongo_schema');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');
// const client = require('./user');

const HeroType = new GraphQLObjectType({
    name: "Hero",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
    }),
  });

  const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
      id: {type: GraphQLID },
      client: { type: ClientType, resolve: (parent) => {
        return clients.find(client => client.id === parent.clientId);
      }} ,
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
    }),
  });

  const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      projects:{
        type: GraphQLList(ProjectType),
        resolve: (parent, args) => {
          return Company
        }
      },
      project: {
          type: ProjectType,
          args: {
              id: {
              type: GraphQLID
          }},
          resolve: (parent, args) => {
              return Company.findById(args.id);
          }
      },
        clients:{
          type: GraphQLList(ClientType),
          resolve: (parent, args) => {
            return Hero.find();
          }
        },
        client: {
            type: ClientType,
            args: {
                id: {
                type: GraphQLID
            }},
            resolve: (parent, args) => {
                return Hero.findById(args.id)
            }
        }
    }
  });


  module.exports = new GraphQLSchema({
    query: RootQuery
  });