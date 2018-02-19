import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
// import classes from "./App.css";
import ToDoList from "./containers/ToDoList/ToDoList";
import { AnimatedSwitch } from "react-router-transition";
import MovieDetails from "./containers/MovieLDetails/MovieDetails";
import MovieList from "./containers/MovieList/MovieList";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={ToDoList} />
            <Route path="/movielist/movie/:id" exact component={MovieDetails} />
            <Route path="/movielist/page/:id" component={MovieList} />
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
