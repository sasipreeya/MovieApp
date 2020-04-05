import React from "react";
import SearchBar from "react-native-search-bar";
import { connect } from "react-redux";
import { search, getSearchResult } from "../actions/search/searchAction";
import { Actions } from "react-native-router-flux";

export class SearchComponent extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  onSearchClicked = (words) => {
    this.props.search(words);
    this.props.getSearchResult(words);
  };

  render() {
    const { searchWords, searchHistory, searchResult } = this.props;
    return (
      <SearchBar
        ref={(search) => (this.search = search)}
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSearchButtonPress={async () => {
          await this.onSearchClicked(this.state.search);
          await this.search.clearText();
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchWords: state.searchReducer.searchWords,
    searchHistory: state.searchReducer.searchHistory,
    searchResult: state.searchReducer.searchResult,
  };
};

export default connect(mapStateToProps, { search, getSearchResult })(
  SearchComponent
);
