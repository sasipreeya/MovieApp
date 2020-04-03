import React from "react";
import SearchBar from "react-native-search-bar";
import { connect } from "react-redux";
import { search, getSearchResult } from "../actions/search/searchAction";

export class SearchComponent extends React.Component {
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
        ref={search => (this.search = search)}
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSearchButtonPress={() => {
          this.onSearchClicked(this.state.search);
          this.search.clearText();
        }}
      />
    );
  }
}

export default connect(null, { search, getSearchResult })(SearchComponent);
