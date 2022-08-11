import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: center;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const SuppliedChildren = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 2rem;
  width: 50%;
`;

export const Mininav = ({ children }) => {
  return (
    <NavBar>
      <NavItem>
        <LinkContainer to="/">
          <div>About</div>
        </LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer to="/posts">
          <div>Posts</div>
        </LinkContainer>
      </NavItem>
      <SuppliedChildren>{children}</SuppliedChildren>
    </NavBar>
  );
};
