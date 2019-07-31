const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const GoogleNewsAPI = require("./GoogleNewsAPI");

const resolvers = {
  Query: {
    getNewsByContinent: async (_source, { filter }, { dataSources }) => {
      return dataSources.googleNewsAPI.getNewsByContinent(filter);
    }
  }
};

const server = new ApolloServer({
  dataSources: () => {
    return {
      googleNewsAPI: new GoogleNewsAPI()
    };
  },
  resolvers,
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
