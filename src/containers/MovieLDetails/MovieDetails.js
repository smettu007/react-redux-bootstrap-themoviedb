import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { Jumbotron } from "react-bootstrap";
import Aux from "../../hoc/Aus";
import classes from "./MovieDetails.css";
class MovieDetails extends Component {
  state = {
    movieData: null,
    loading: false,
    movieId: "",
    error: ""
  };

  componentDidMount() {
    this.setState({ loading: true, movieId: this.props.match.params.id });
    this.fetchMovieData();
  }

  fetchMovieData() {
    let api = "a64861ae8330e04f57cad056f843569a";
    let url =
      "https://api.themoviedb.org/3/movie/" +
      this.props.match.params.id +
      "?api_key=" +
      api +
      "&language=en-US";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ loading: false, movieData: res.data });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  }
  render() {
    let movieDataContainer = null;

    if (!this.state.loading && this.state.movieData) {
      movieDataContainer = (
        <Aux>
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={
                "https://image.tmdb.org/t/p/w500/" +
                this.state.movieData.backdrop_path
              }
              alt={this.state.movieData.title}
            />
            <div className="card-block">
              <h4 className="card-title">
                {this.state.movieData.original_title}
              </h4>
              <p className="card-text">{this.state.movieData.overview}</p>
              <p className="card-text">
                <small className="text-muted">
                  Popularity: {this.state.movieData.popularity}
                </small>
              </p>
            </div>
          </div>
        </Aux>
      );
    } else {
      movieDataContainer = <Spinner />;
    }

    return <div className={classes.content}>{movieDataContainer}</div>;
  }
}

export default MovieDetails;
