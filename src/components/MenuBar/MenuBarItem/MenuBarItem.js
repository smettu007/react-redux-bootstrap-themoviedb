import React from "react";
import {NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const MenuBarItem = props => (

<LinkContainer onClick={props.onclick} to={props.link} exact={props.exact}>
<NavItem eventKey={1}


>
      {props.children}
      </NavItem>
</LinkContainer>
      
   
  
);

export default MenuBarItem;
