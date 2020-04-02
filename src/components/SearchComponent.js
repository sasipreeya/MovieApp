import React from "react";
import SearchBar from "react-native-search-bar";
import { search } from "../actions/search/searchAction";

export default class SearchComponent extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onSearchClicked = searchWords => {
    search(searchWords);
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
