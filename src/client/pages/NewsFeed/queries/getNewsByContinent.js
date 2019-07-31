const query = continent => `
  query GetNewsByContinent {
    getNewsByContinent(filter: { continent: "${continent}" }) {
      searchInformation {
        formattedSearchTime
        formattedTotalResults
      }
      items {
        title
        link
        snippet
  		}
    }
  }
`;

export default query;
