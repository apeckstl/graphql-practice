const express = require('express');
const app = express();
const graphql = require("graphql");
const router = require('./routes/router');
const cookieParser = require('cookie-parser');
const expressGraphQl = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/queries");

const schema = new GraphQLSchema({
  query
});

app.use(
  '/graphql',
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = app.listen(8081, () => {
});

