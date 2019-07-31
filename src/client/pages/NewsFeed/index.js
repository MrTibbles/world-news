import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { useRESTAPI } from "../../services";

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

  return <h1>{continent}</h1>;
};

NewsFeed.propTypes = {
  match: PropTypes.object.isRequired
};

export default NewsFeed;
