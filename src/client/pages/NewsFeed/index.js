import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { useRESTAPI } from "../../services";
import * as Components from "./components";

const NewsFeed = ({ match }) => {
  const { continent } = match.params;
  const [networkState, submitQuery] = useRESTAPI(continent);

  const fetchNewsStoriesByContinent = useRef(() => {
    submitQuery();
  });

  useEffect(() => {
    fetchNewsStoriesByContinent.current();
  }, []);

  useEffect(() => {
    if (networkState.data) console.info(networkState.data);
  }, [networkState]);

  if (!match.params || !continent) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <h1 className="capitalize">{continent}</h1>
      {networkState.error ? (
        <h1>Sorry, something went wrong getting the news 🤷‍♀️</h1>
      ) : null}
      {networkState.loading ? <Components.Loading /> : null}
      {networkState.data ? (
        <React.Fragment>
          <Components.SearchInformation
            searchTime={networkState.data.searchInformation.formattedSearchTime}
            totalResults={
              networkState.data.searchInformation.formattedTotalResults
            }
          />
          <Components.ContinentNewsFeed items={networkState.data.items} />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

NewsFeed.propTypes = {
  match: PropTypes.object.isRequired
};

export default NewsFeed;
