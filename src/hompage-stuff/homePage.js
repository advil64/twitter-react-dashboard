import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

function selectedItem(val) {
  console.log(val);
}

export default class HomePage extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {username: ""}
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick() {
  //   this.setState(state => ({
  //     username: "yolo"
  //   }));
  // }

  state = {
    username: ""
  };

  onSubmit = () => {
    this.setState({username: '/'+this.state.username})
  };
  
  render() {
    return (
      <div>
        <Container className="container-lg pt-5">
          <Jumbotron className="text-center">
            <h1>Twitter Dash</h1>
            <p>
              At Twitter Dash we use a complex LDA algorithm to analyze tweet behavior
              and clasify tweets into models using machine learning. Enter a twitter handle 
              to get started
            </p>
            <div>
              <Form.Row controlId="Twitter-Username-Enter">
                <Col>
                  <Form.Control placeholder="Twitter Username" onChange={e => this.setState({ username: e.target.value })}/>
                  <Form.Text className="text-muted">
                    This is the user you would like to analyze.
                  </Form.Text>
                </Col>
                <Col xs="auto">
                <NavLink to={this.state.username}>
                  <Button type="submit" variant="primary" onClick={this.onSubmit}>
                    Search!
                  </Button>{" "}
                  </NavLink>
                </Col>
              </Form.Row>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
