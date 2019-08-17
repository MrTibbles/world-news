import * as React from "react";
import { styled } from "linaria/react";

import NewspaperIcon from "../../../ui-icons/NewspaperIcon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .newspaper-icon {
    width: 50%;
    display: block;
    margin-bottom: 2rem;
  }
`;

const Loading: React.FunctionComponent<{}> = (): JSX.Element => (
  <Container>
    <NewspaperIcon />
    <h2>Loading...</h2>
  </Container>
);

export default Loading;
