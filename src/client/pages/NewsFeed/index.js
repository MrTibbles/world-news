import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const NewsFeed = ({ match }) => {
  const { continent } = match.params;

  if (!match.params || !continent) {
    return <Redirect to="/" />;
  }

  return <h1>{continent}</h1>;
};

NewsFeed.propTypes = {
  match: PropTypes.object.isRequired
};

export default NewsFeed;
