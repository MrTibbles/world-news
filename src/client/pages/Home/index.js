import React, { useRef } from "react";
import * as Components from "./components";

const HomePage = () => {
  const onContinentSelected = useRef(continent => {
    console.info(`continent: ${continent}`);
  });

  return (
    <Components.WorldMap onContinentSelected={onContinentSelected.current} />
  );
};

export default HomePage;
