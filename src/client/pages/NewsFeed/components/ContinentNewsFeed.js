import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "linaria/react";

const List = styled.ul`
  list-style: none;
  padding-top: var(--spacing-base);

  li {
    padding: var(--spacing-base) 0;
    margin-bottom: var(--spacing-base);

    &:hover {
      box-shadow: 0 2px 16px var(--color-dark);
    }
  }
`;

const ContinentNewsFeed = ({ items }) => {
  const [newsStories] = useState(items);

  return (
    <List>
      {/* REPLACE INDEX KEYS WITH IDS WHEN GQL IS IMPLEMENTED */}
      {newsStories.map((item, idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </List>
  );
};

ContinentNewsFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default ContinentNewsFeed;
