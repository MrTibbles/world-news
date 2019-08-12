import * as React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  display: flex;
  border-style: solid;
  border-color: var(--color-dark);
  border-width: 0 0 1px;
`;

interface SearchInformationProps {
  searchTime: number,
  totalResults: number,
}

const SearchInformation: React.SFC<SearchInformationProps> = ({
  searchTime,
  totalResults
}): JSX.Element => (
  <Container>
    <h2>
      Found {totalResults} stories, in {searchTime} seconds
    </h2>
  </Container>
);

export default SearchInformation;
