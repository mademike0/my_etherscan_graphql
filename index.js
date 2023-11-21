const { ApolloServer } = require("apollo-server"); // Import ApolloServer from apollo-server
const { importSchema } = require("graphql-import"); // Import importSchema from graphql-import
const EtherDataSource = require("./datasource/ethDatasource"); // Import EtherDataSource class 

require("dotenv").config(); // Load environment variables from .env file

// Code to setup GraphQL server
const resolvers = {
  Query: {
    etherBalanceByAddress: (root, _args, { dataSources }) => // Resolver to get ether balance
      dataSources.ethDataSource.etherBalanceByAddress(), 

    totalSupplyOfEther: (root, _args, { dataSources }) => // Resolver to get total ether supply
      dataSources.ethDataSource.totalSupplyOfEther(),

    latestEthereumPrice: (root, _args, { dataSources }) => // Resolver to get latest ether price
      dataSources.ethDataSource.getLatestEthereumPrice(),

    blockConfirmationTime: (root, _args, { dataSources }) => // Resolver to get block confirmation time
      dataSources.ethDataSource.getBlockConfirmationTime(),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ethDataSource: new EtherDataSource(), // Create EtherDataSource instance
  }), 
});

// Disable timeout and start server
server.timeout = 0; 
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`) ;
});