import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "linaria/react";
import WorldIcon from "../ui-icons/WorldIcon";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: var(--spacing-double) var(--spacing-base) var(--spacing-base);
`;

const Navbar = styled.nav`
  display: flex;
  padding: var(--spacing-sml) var(--spacing-base);
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.5);

  a {
    display: block;
    width: 3rem;
    padding: 0.25rem;
  }
`;

interface MainLayoutContainerProps {
  children: React.ReactNode;
}

const MainLayoutContainer: React.SFC<MainLayoutContainerProps> = (
  props
): JSX.Element => (
  <React.Fragment>
    <Navbar>
      <Link to="/">
        <WorldIcon />
      </Link>
    </Navbar>
    <Container>{props.children}</Container>
  </React.Fragment>
);

MainLayoutContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayoutContainer;
