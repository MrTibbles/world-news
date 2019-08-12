import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as Components from "./components";

const HomePage: React.SFC<RouteComponentProps> = ({ history }): JSX.Element => {
  const onContinentSelected = React.useRef((continent: string): void => {
    history.push(`/news-feed/${continent}`);
  });

  return (
    <Components.WorldMap onContinentSelected={onContinentSelected.current} />
  );
};

export default HomePage;
