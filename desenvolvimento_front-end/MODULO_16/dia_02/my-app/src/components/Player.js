import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Player extends Component {
  render() {
    const { category, movie } = this.props;
    return (
      <div className="col-sm-12 col-md-7 mt-5">
        <h1>Category: {category.name}</h1>
        <h3>Filme: {movie.title}</h3>
        <div className="container">
          <video width="90%" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  category: store.movieReducer.selectedCategorie,
  movie: store.movieReducer.selectedMovie,
});

export default connect(mapStateToProps)(Player);
