const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  type: "Query",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    year_published: { type: GraphQLInt }
  }
});

exports.BookType = BookType;