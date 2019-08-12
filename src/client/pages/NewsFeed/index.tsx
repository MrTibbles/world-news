import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useGraphQLAPI } from "../../services";
import * as Components from "./components";
import getNewsByContinentQuery from "./queries/getNewsByContinent";

const NewsFeed: React.SFC<RouteComponentProps<{ continent: string }>> = ({
  match
}): JSX.Element => {
  const { continent } = match.params;
  const [networkState, submitQuery] = useGraphQLAPI();

  const fetchNewsStoriesByContinent = React.useRef((): void => {
    const query = getNewsByContinentQuery(continent);

    submitQuery(query);
  });

  React.useEffect((): void => {
    fetchNewsStoriesByContinent.current();
  }, []);

  const result = networkState.data
    ? networkState.data.getNewsByContinent
    : undefined;

  return (
    <React.Fragment>
      <h1 className="capitalize">{continent}</h1>
      {networkState.error ? (
        <h1>Sorry, something went wrong getting the news 🤷‍♀️</h1>
      ) : null}
      {networkState.loading ? <Components.Loading /> : null}
      {result ? (
        <React.Fragment>
          <Components.SearchInformation
            searchTime={result.searchInformation.formattedSearchTime}
            totalResults={result.searchInformation.formattedTotalResults}
          />
          <Components.ContinentNewsFeed items={result.items} />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default NewsFeed;