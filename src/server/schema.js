const { gql } = require("apollo-server");

const schema = gql`
  type Query {
    getNewsByContinent(filter: NewsByContinentInput!): NewsResult!
  }

  input NewsByContinentInput {
    continent: String!
  }

  type NewsResult {
    queries: QueryInformation!
    searchInformation: SearchInformation!
    items: [NewsItem]!
  }

  type QueryInformation {
    request: QueryMetadata!
    nextPage: QueryMetadata
  }

  type QueryMetadata {
    title: String
    totalResults: String
    searchTerms: String
    count: Int
    startIndex: Int
    inputEncoding: String
    outputEncoding: String
    safe: String
    cx: String
  }

  type SearchInformation {
    searchTime: Float!
    formattedSearchTime: String!
    totalResults: String!
    formattedTotalResults: String!
  }

  type NewsItem {
    title: String
    htmlTitle: String
    link: String
    displayLink: String
    snippet: String
    formattedUrl: String
  }
`;

module.exports = schema;
