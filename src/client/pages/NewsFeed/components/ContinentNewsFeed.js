import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "linaria/react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

const List = styled.ul`
  list-style: none;
  padding-top: var(--spacing-base);

  li {
    padding: var(--spacing-base) 0;
    margin-bottom: var(--spacing-base);
    display: flex;
    flex-direction: column;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  padding-top: var(--spacing-base);

  .SocialMediaShareButton {
    margin-right: var(--spacing-sml);
  }
`;

const ContinentNewsFeed = ({ items }) => {
  const [newsStories] = useState(items);

  return (
    <List>
      {/* REPLACE INDEX KEYS WITH IDS WHEN GQL IS IMPLEMENTED */}
      {newsStories.map((item, idx) => (
        <li key={idx}>
          <h3>{item.title}</h3>
          <p>{item.snippet}</p>
          <ShareButtons>
            <EmailShareButton
              body={`Link to article: ${item.link}`}
              subject={`Hey read this article on: ${item.title}`}
              url={item.link}
            >
              <EmailIcon round={true} size={22} />
            </EmailShareButton>
            <FacebookShareButton quote={item.title} url={item.link}>
              <FacebookIcon round={true} size={22} />
            </FacebookShareButton>
            <TwitterShareButton title={item.title} url={item.link}>
              <TwitterIcon round={true} size={22} />
            </TwitterShareButton>
          </ShareButtons>
        </li>
      ))}
    </List>
  );
};

ContinentNewsFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default ContinentNewsFeed;
