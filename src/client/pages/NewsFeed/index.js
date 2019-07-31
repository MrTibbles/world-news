import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { useGraphQLAPI } from "../../services";
import * as Components from "./components";
import getNewsByContinentQuery from "./queries/getNewsByContinent";

const NewsFeed = ({ match }) => {
  const { continent } = match.params;
  const [networkState, submitQuery] = useGraphQLAPI();

  const fetchNewsStoriesByContinent = useRef(() => {
    const query = getNewsByContinentQuery(continent);

    submitQuery(query);
  });

  useEffect(() => {
    fetchNewsStoriesByContinent.current();
  }, []);

  if (!match.params || !continent) {
    return <Redirect to="/" />;
  }

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

NewsFeed.propTypes = {
  match: PropTypes.object.isRequired
};

export default NewsFeed;
