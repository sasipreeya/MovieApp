import React from "react";
import SearchBar from "react-native-search-bar";

export var searchHistory = [];

export default class SearchComponent extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onSearchClicked = searchWords => {
    searchHistory.push(searchWords);
    console.log(searchHistory);
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
