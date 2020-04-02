import React from "react";
import SearchBar from "react-native-search-bar";

export default class SearchComponent extends React.Component {
  render() {
    return (
        <SearchBar
            ref="searchBar"
            placeholder="Search"
            // onChangeText={...}
            // onSearchButtonPress={...}
            // onCancelButtonPress={...}
        />
    );
  }
}
