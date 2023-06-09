

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


  module.exports = {HeroType, CompanyType};