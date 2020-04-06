import React from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View } from "react-native";
import { MovieItem } from "../components/MovieItemComponent";

export class SearchResultScene extends React.Component {
  render() {
    const { searchResult } = this.props;
    console.log("searchResult", searchResult);
    return (
      <View>
        {searchResult.results.map((item, index) => (
          <MovieItem
            item={item}
            title={item.title}
            release_date={item.release_date}
            overview={item.overview}
            poster_path={item.poster_path}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchReducer.searchResult,
  };
};

export default connect(mapStateToProps)(SearchResultScene);
