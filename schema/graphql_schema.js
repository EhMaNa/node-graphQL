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
      hero_name: { type: GraphQLString },
      company: { type: CompanyType, resolve: (parent) => {
        return clients.find(client => client.id === parent.clientId);
      }} ,
    }),
  });

  const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
      id: {type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      
    }),
  });

  const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      companies:{
        type: GraphQLList(CompanyType),
        resolve: (parent, args) => {
          return Company.find();
        }
      },
      company: {
          type: CompanyType,
          args: {
              id: {
              type: GraphQLID
          }},
          resolve: (parent, args) => {
              return Company.findById(args.id);
          }
      },
        clients:{
          type: GraphQLList(HeroType),
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