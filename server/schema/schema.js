const graphql = require('graphql');

const { GraogQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraogQLObjectType ({
    name : 'Book',
    fields:()=>({
        id:     {type: GraphQLString},
        name:   {type: GraphQLString},
        genre:  {type: GraphQLString}
    })
});

const RootQuery = new GraogQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args:{id:{type: GraphQLString}},
            resolve(parent, args){
                // code to get data from DB / other source 
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
});