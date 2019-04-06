import React from "react";
import "./styles.scss";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Menus = styled.li`
  list-style: none;
  a {
    background: ${props => (props.current ? "#ffbf00" : "")};
  }
`;

class Navigation extends React.Component {
  render() {
    const {
      location: { pathname },
      isAuthenticated,
      logoutUser
    } = this.props;
    return (
      <Menus>
        <ul className="tags">
          <Menus current={pathname === "/"}>
            ><a href="/">Profile</a>
          </Menus>
          <Menus current={pathname === "/projects"}>
            <a href="/projects">Projects</a>
          </Menus>
          <Menus current={pathname === "/blog"}>
            <a href="/blog">Blog</a>
          </Menus>

          {isAuthenticated && (
            <>
              <Menus current={pathname === "/admin"}>
                <a href="/admin">Admin</a>
              </Menus>
              <Menus current={pathname === "/login"}>
                <button onClick={() => logoutUser(this.props.history)}>
                  logout
                </button>
              </Menus>
            </>
          )}
        </ul>
      </Menus>
    );
  }
}

export default withRouter(Navigation);
