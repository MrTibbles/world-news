export interface SearchInformation {
  formattedSearchTime: number;
  formattedTotalResults: number;
}

export interface Item {
  title: string;
  link: string;
  snippet: string;
}

export interface GetNewsByContinentResponse {
  searchInformation: SearchInformation;
  items: Item[];
}

export interface GraphQLResponse {
  getNewsByContinent: GetNewsByContinentResponse;
}
