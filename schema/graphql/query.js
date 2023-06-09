const { Hero, Company } = require('../mongo_schema');
const { HeroType, CompanyType } = require('./types');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
  } = require('graphql');


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
        heroes:{
          type: GraphQLList(HeroType),
          resolve: (parent, args) => {
            return Hero.find();
          }
        },
        hero: {
            type: HeroType,
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


  module.exports = RootQuery;