import React, { Component } from "react";
import MoiveListContainer from "../../components/MovieListContainer/MovieListContainer";
import { Row, Pagination } from "react-bootstrap";
import classes from "./MovieList.css";
import axios from "axios";
import Aux from "../../hoc/Aus";
import Spinner from "../../components/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/MovieList";
class MovieList extends Component {
  state = {
    loading: false,
    error: null
  };

  componentDidMount() {
    console.log("mounter");

    console.log(this.props);
    this.props.initMoviesList(this.props.match.params.id);
  }

  getPaginationNumber = number => {
    this.props.initMoviesList(number);
    this.props.history.push("/movielist/page/" + number);
  };
  componentDidUpdate() {
    console.log("movelist updated");
    if (this.props.match.params.id != this.props.activePage) {
      this.props.initMoviesList(this.props.match.params.id);
    }
  }
  render() {
    console.log("rendered");
    console.log(this.props);
    let moveList = null;
    let movieError = "Could not lod movies";
    let pages = [];
    let active = this.props.activePage;
    if (this.props.movieList) {
      let i = 1;
      let paginationIncrement = this.props.movieList.length;
      if (this.props.match.params.id >= 20) {
        i = this.props.match.params.id - 1;
        paginationIncrement = this.props.movieList.length + i;
      }
      for (let list = i; list <= paginationIncrement; list++) {
        pages.push(
          <Pagination.Item
            key={list}
            onClick={event => {
              event.preventDefault();
              this.getPaginationNumber(list);
            }}
            active={list === active}
            href={"/movielist/page/" + list}
          >
            {list}
          </Pagination.Item>
        );
      }
    }

    if (!this.props.loading) {
      moveList = (
        <Aux>
          <MoiveListContainer movies={this.props.movieList} />
          <Pagination bsSize="medium">{pages}</Pagination>
        </Aux>
      );
    } else {
      moveList = <Spinner />;
    }
    return (
      <div className={classes.list}>
        <Row className="show-grid">
          {this.state.error ? movieError : moveList}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieList: state.movieList,
    activePage: state.activePage,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initMoviesList: pageNumber => dispatch(actions.initMoviesList(pageNumber))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(MovieList)
);
