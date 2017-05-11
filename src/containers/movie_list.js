import React, { Component } from 'react';
import { connect } from 'react-redux';
class MovieList extends Component {
    renderMovie(movie) {
    return (
             <li key={index}></li>
    );
  }

  render() {
    return (
        <ul>
          {this.props.movieList.map(this.renderMovie)}
        </ul>
    );
  }
}

function mapStateToProps({ movieList }) {
  return { movieList };
}

export default connect(mapStateToProps)(MovieList);
