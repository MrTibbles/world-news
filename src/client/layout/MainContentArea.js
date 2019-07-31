import React from "react";
import PropTypes from "prop-types";
import { styled } from "linaria/react";

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: var(--spacing-double) var(--spacing-base) var(--spacing-base);
`;

const MainContentArea = props => <Container>{props.children}</Container>;

MainContentArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContentArea;
