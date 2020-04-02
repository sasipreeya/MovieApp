import React from "react";
import SearchBar from "react-native-search-bar";
import { search, getSearchResult } from "../actions/search/searchAction";

export default class SearchComponent extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onSearchClicked = words => {
    search(words);
    getSearchResult(words);
  };

  render() {
    return (
      <SearchBar
        ref="searchBar"
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSearchButtonPress={() => {
          this.onSearchClicked(this.state.search);
        }}
      />
    );
  }
}
