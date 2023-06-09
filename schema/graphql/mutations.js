const { Hero } = require('../mongo_schema');
const { HeroType } = require('./types');
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
            },
            resolve: (args) => {
                const hero = Hero({
                    name : args.name,
                    email: args.email,
                    hero_name : args.hero_name
                });
                return hero.save();
            }
        },
        deleteHero: {
            type: HeroType,
            args: {
              id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
              Project.find({ clientId: args.id }).then((projects) => {
                projects.forEach((project) => {
                  project.deleteOne();
                });
              });
      
              return Client.findByIdAndRemove(args.id);
            },
          },
    }
  })