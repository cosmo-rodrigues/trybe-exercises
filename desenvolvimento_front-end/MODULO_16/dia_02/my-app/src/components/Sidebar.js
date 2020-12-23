import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as movieAction from '../actions';
export class Sidebar extends Component {
  render() {
    const { movies, selectMovie } = this.props;
    return (
      <div className="col-sm-12 col-md-5 my-3 bg-info rounded mt-5">
        {movies.map(categories => (
          <div className="text-left" key={categories.id}>
            <h3 className="text-center">{categories.name}</h3>
            <div className="title-underline bg-danger"></div>
              <ul className="row">
                {categories.movies.map(title => (
                  <li className="d-flex col-sm-7 my-3 align-items-center justify-content-end" key={title.id}>
                    <p>
                      <span className="ul h5">{title.title}</span> {title.released}
                    </p>
                    <button
                      type="submit"
                      className="btn btn-primary ml-3 py-1"
                      onClick={() => selectMovie(categories, title)}
                    >Select
                    </button>
                  </li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (reducer) => ({
  movies: reducer.movieReducer.categories
});

const mapDispatchToProps = (action) => ({
  selectMovie: (category, movie) => action(
    movieAction.selectMovie(category, movie)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
