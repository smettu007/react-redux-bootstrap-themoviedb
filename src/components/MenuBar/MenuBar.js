import { Navbar, Nav } from "react-bootstrap";
 import MenuBarItem from "./MenuBarItem/MenuBarItem";
// import {Navbar } from "react-materialize";

import React, { Component } from "react";

class MenuBar extends Component {

    state={
        navExpanded:false
    }
    onNavItemClick = () => {
      
        this.setState({ navExpanded: false });
    }

    onNavbarToggle = () => {
        this.setState({navExpanded: !this.state.navExpanded});
    }

  render() {
    return (
      <div>
          {/* <Navbar brand='logo'  >
          <MenuBarItem onclick={this.onNavItemClick} exact link="/">To-Do</MenuBarItem>
              <MenuBarItem onclick={this.onNavItemClick}  link="/redux-example">Redux</MenuBarItem>
</Navbar> */}
        <Navbar inverse  onToggle={this.onNavbarToggle} expanded={this.state.navExpanded}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap-Router</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <MenuBarItem onclick={this.onNavItemClick} exact link="/">To-Do</MenuBarItem>
              <MenuBarItem onclick={this.onNavItemClick}  link="/movielist/page/1">
                Redux Example
              </MenuBarItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
