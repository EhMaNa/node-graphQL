const {Hero, Company} = require('./mongo_schema');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');

const HeroType = new GraphQLObjectType({
    name: "Hero",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      hero_name: { type: GraphQLString },
      company: { type: CompanyType, resolve: (parent) => {
        return Company.findById(parent.companyId);
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


  module.exports = new GraphQLSchema({
    query: RootQuery
  });