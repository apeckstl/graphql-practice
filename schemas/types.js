const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  type: "Query",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    isbn13: { type: GraphQLString },
    publisher: { type: GraphQLString },
    image_url: { type: GraphQLString },
    num_pages: { type: GraphQLInt },
    average_rating: { type: GraphQLFloat },
    description: { type: GraphQLString },
    published: { type: GraphQLInt }
  }
});

exports.BookType = BookType;