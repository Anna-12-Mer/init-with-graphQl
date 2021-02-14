const express = require('express'); 
const { graphqlHTTP } = require('express-graphql');  
const schema = require('./schema/schema')
const app = express(); 


// bind express with graphql
app.use('/graphql',graphqlHTTP({
      schema ,
      graphiql: true,
    }),
  );

// run on the port 4000:
app.listen(4000,()=>{
    console.log("running successfully...")
})