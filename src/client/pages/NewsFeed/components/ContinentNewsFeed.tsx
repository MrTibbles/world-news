import * as React from "react";
import { styled } from "linaria/react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import { Item } from "../types";

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

interface ContinentNewsFeedProps {
  items: Item[];
}

const ContinentNewsFeed: React.SFC<ContinentNewsFeedProps> = ({
  items
}): JSX.Element => (
  <List>
    {items.map(
      (item: Item, idx: number): JSX.Element => (
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
      )
    )}
  </List>
);

export default ContinentNewsFeed;
