import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as Components from "./components";

const HomePage = ({ history }) => {
  const onContinentSelected = useRef(continent => {
    return history.push(`/news-feed/${continent}`);
  });

  return (
    <Components.WorldMap onContinentSelected={onContinentSelected.current} />
  );
};

HomePage.propTypes = {
  history: PropTypes.object
};

export default HomePage;
