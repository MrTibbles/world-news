import React from "react";
import PropTypes from "prop-types";
import { styled } from "linaria/react";

const Container = styled.div`
  display: flex;
  border-style: solid;
  border-color: var(--color-dark);
  border-width: 0 0 1px;
`;

const SearchInformation = ({ searchTime, totalResults }) => (
  <Container>
    <h2>
      Found {totalResults} stories, in {searchTime} seconds
    </h2>
  </Container>
);

SearchInformation.propTypes = {
  searchTime: PropTypes.string.isRequired,
  totalResults: PropTypes.string.isRequired
};

export default SearchInformation;
