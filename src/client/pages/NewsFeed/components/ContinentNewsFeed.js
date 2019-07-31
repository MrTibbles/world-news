import React from "react";

const ContinentNewsFeed = ({ newsItems }) => {
  return (
    <ul>
      {newsItems.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ContinentNewsFeed;
