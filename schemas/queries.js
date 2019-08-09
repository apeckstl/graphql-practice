const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { BookType } = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM book WHERE id=$1`;
                const values = [args.id];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue) {
                const query = `SELECT * FROM book`;
                
                return db
                    .many(query)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
});

exports.query = RootQuery;