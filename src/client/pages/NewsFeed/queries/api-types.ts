export interface SearchInformationFragment {
  formattedSearchTime: number;
  formattedTotalResults: number;
}

export interface Item {
  title: string;
  link: string;
  snippet: string;
}

export interface GetNewsByContinentResponse {
  searchInformation: SearchInformationFragment;
  items: Item[];
}

export interface GraphQLResponse {
  getNewsByContinent: GetNewsByContinentResponse;
}
