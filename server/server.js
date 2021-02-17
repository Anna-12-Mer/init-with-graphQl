const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// allow cross-origin requests
app.use(cors())

// Connect to mlab / mongodb atls database
mongoose.connect('mongodb+srv://gql-amna:amna1234@cluster0.m8npc.mongodb.net/graphql?retryWrites=true&w=majority');
// event listener
mongoose.connection.once('open', () => {
  console.log("Connected to database");
});


// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}),
);

// run on the port 4000:
app.listen(4000, () => {
  console.log("running successfully...")
})