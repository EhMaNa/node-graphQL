const { Hero, Company } = require('../mongo_schema');
const { HeroType, CompanyType } = require('./types');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList,
  } = require('graphql');



  const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addHero : {
            type: HeroType,
            args: {
                name: { type : GraphQLNonNull(GraphQLString) },
                email: { type : GraphQLNonNull(GraphQLString) },
                hero_name: { type : GraphQLNonNull(GraphQLString) },
                company: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve: (args) => {
                const hero = Hero({
                    name : args.name,
                    email: args.email,
                    hero_name : args.hero_name,
                    company: args.company
                });
                return hero.save();
            }
        },
        addCompany : {
            type: CompanyType,
            args: {
                name: { type : GraphQLNonNull(GraphQLString) },
                email: { type : GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const company = Company({
                    name : args.name,
                    email: args.email,
                });
                return company.save();
            }
        },
        // deleteHero: {
        //     type: HeroType,
        //     args: {
        //       id: { type: GraphQLNonNull(GraphQLID) },
        //     },
        //     resolve(parent, args) {
        //       Project.find({ clientId: args.id }).then((projects) => {
        //         projects.forEach((project) => {
        //           project.deleteOne();
        //         });
        //       });
      
        //       return Client.findByIdAndRemove(args.id);
        //     },
        //   },
    }
  })


  module.exports = mutation;