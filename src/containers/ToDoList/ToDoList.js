import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Panel,
  FormControl,
  FormGroup,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import classes from "./ToDoList.css";
import ModalUI from "../../components/Modal";

class ToDoList extends Component {
  state = {
    list: [],
    listText: "",
    emptyList: true,
    showModal: false
  };

  inputChangedhandler = event => {
    this.setState({ listText: event.target.value,animateList:!this.state.animateList });
  };

  addListHandler = () => {
    if (this.state.listText.trim() !== "") {
      this.setState(prevState => {
        return Object.assign({}, this.state, {
          list: prevState.list.concat(prevState.listText),
          listText:''
        });
      });
    } else {
      this.setState({ showModal: true });
    }
  };
  removeItem = curIndex => {
    this.setState(prevState => {
      return Object.assign({}, this.state, {
        list: prevState.list.filter((item, index) => index !== curIndex)
      });
    });
  };
  onSelectNonModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let modal = (
      <ModalUI
        show={this.state.showModal}
        onHide={this.onSelectNonModal}
        errorTitle={"Error"}
        errorMessage={"please enter something in the input field"}
      />
    );
    let Body = (
      <Row className="show-grid">
        <Col sm={12} md={12} lg={12}>
          <Panel>
            <Panel.Heading>To Do List</Panel.Heading>
            <Panel.Body>
              Add something to the list and click on it to remove it form the
              list
            </Panel.Body>
          </Panel>
        </Col>
        <Col sm={12} md={12}>
          {/* <Input
            onChange={event => this.inputChangedhandler(event)}
            value={this.state.listText}
            type="text"
            label="Type to list"
            s={12}
            m={12}
          /> */}
          <form>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Enter something you want to do"
                onChange={event => this.inputChangedhandler(event)}
                value={this.state.listText}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </Col>
        <Col sm={12} md={12}>
          <Button waves="light" onClick={this.addListHandler}>
            Add To List
          </Button>
        </Col>
      </Row>
    );


    return (
     
        <div className={classes.center}>
          {/* <input type="text" value={this.state.listText} onChange={(event)=>this.inputChangedhandler(event)}/>
        <button onClick={this.addListHandler}>Add to list</button> */}
          {Body}
          {modal}
          <h4>TO-Do list</h4>
          <ListGroup>
            {this.state.list.map((li, index) => (
              
              <ListGroupItem
                className="list center"
                onClick={() => this.removeItem(index)}
                key={index}
                bsStyle="info"
              >
                {li}
              </ListGroupItem>
            
            ))}
          </ListGroup>
        </div>
     
    );
  }
}

export default ToDoList;
