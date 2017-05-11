import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import MoviewList from '../containers/movie_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MoviewList />
      </div>
    );
  }
}
